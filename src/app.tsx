import React, { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { toast } from "sonner";

function App() {
  const [dataList, setDataList] = useState<string[]>([]);
  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(_, result) => {
          if (result) {
            setDataList((prev) => [...prev, result.getText()]);
            toast.success("Scan success");
          }
        }}
      />
      <ul>
        {dataList.map((data, index) => (
          <li key={data + index}>{data}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
