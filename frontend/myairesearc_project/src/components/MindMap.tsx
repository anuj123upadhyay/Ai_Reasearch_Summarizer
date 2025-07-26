import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface MindMapProps {
  data: string; // JSON string from backend
}

const MindMap: React.FC<MindMapProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data || !svgRef.current) return;

    let parsedData;
    try {
      parsedData = JSON.parse(data);
    } catch (e) {
      console.error("Invalid mindmap data", e);
      return;
    }

    // nodes should be array of objects: [{id: string}]
    // edges: [{from: string, to: string}]
    const { nodes, edges } = parsedData;
    const width = 600;
    const height = 400;

    // Convert nodes to objects if they are strings
    const nodeObjects =
      typeof nodes[0] === "string"
        ? nodes.map((id: string) => ({ id }))
        : nodes;

    // Convert edges to D3 format
    const edgeObjects =
      edges && typeof edges[0]?.from === "string"
        ? edges.map((e: { from: string; to: string }) => ({
            source: e.from,
            target: e.to,
          }))
        : edges;

    // Clear previous SVG
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const simulation = d3
      .forceSimulation(nodeObjects)
      .force(
        "link",
        d3
          .forceLink(edgeObjects)
          .id((d: any) => d.id)
          .distance(120)
      )
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2));

    // Draw links
    const link = svg
      .append("g")
      .attr("stroke", "#aaa")
      .selectAll("line")
      .data(edgeObjects)
      .enter()
      .append("line")
      .attr("stroke-width", 2);

    // Draw nodes
    const node = svg
      .append("g")
      .selectAll("circle")
      .data(nodeObjects)
      .enter()
      .append("circle")
      .attr("r", 20)
      .attr("fill", "#4f46e5")
      .call(
        d3
          .drag<SVGCircleElement, any>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    // Add labels
    const label = svg
      .append("g")
      .selectAll("text")
      .data(nodeObjects)
      .enter()
      .append("text")
      .text((d: any) => d.id)
      .attr("font-size", 14)
      .attr("fill", "#fff")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em");

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);

      label.attr("x", (d: any) => d.x).attr("y", (d: any) => d.y);
    });

    return () => {
      simulation.stop();
    };
  }, [data]);

  return (
    <div className="mt-6 p-4 bg-white border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Mind Map</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default MindMap;