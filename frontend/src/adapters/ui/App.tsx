import React from "react";

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: "Inter, sans-serif" }}>
      <h1>FuelEU Compliance Dashboard — (MVP)</h1>
      <p>Tabs: Routes | Compare | Banking | Pooling (UI skeleton)</p>
      <div style={{ marginTop: 20 }}>
        <pre>
{`Routes:
- R001 Container HFO 2024 91.0 gCO2e/MJ
- R002 BulkCarrier LNG 2024 88.0 gCO2e/MJ
...`}
        </pre>
      </div>
      <p style={{ marginTop: 16, fontStyle: "italic" }}>
        Full frontend and backend implementation is planned; domain models and documentation included in this repo.
      </p>
    </div>
  );
}
