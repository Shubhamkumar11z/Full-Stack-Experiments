import React from "react";
import { useSelector } from "react-redux";

export const RenderMonitor = () => {
  const renderCounts = useSelector(
    (state) => state.render.renderCounts
  );

  const totalRenders = useSelector(
    (state) => state.render.totalRenders
  );

  return (
    <div className="render-monitor">
      <h3>Render Monitor</h3>

      <p>
        Total renders: <strong>{totalRenders}</strong>
      </p>

      <div>
        {Object.entries(renderCounts).map(([id, count]) => (
          <p key={id}>
            {id}: <strong>{count}</strong> renders
          </p>
        ))}
      </div>
    </div>
  );
};