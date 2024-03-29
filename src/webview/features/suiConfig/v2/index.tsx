import React, { useEffect, useRef, useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { convertWindowsToUnixPath } from "../../../utils";
import { FileWithPath } from "../../../../types";
import { useSuiClientContext } from "@mysten/dapp-kit";
import Collapsible from 'react-collapsible';
import { messageHandler } from "@estruyf/vscode/dist/client";

export interface TerminalResponse {
  stdout: string;
  stderr: string;
};

const requestData = async (action: string) => {
  return messageHandler.request<TerminalResponse>(action);
};

export const SuiConfig = () => {
  const [isSuiCargo, setIsSuiCargo] = useState<boolean>(false);
  const [suiPath, setSuiPath] = useState<string>("");
  const { network, selectNetwork } = useSuiClientContext();

  const handleNetworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectNetwork(e.target.value);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function test() {
      const resp = await requestData("GET_DATA");
      const { stdout, stderr } = resp;
      const objects = JSON.parse(stdout);
      console.log(objects);
      // console.log(stdout, stderr);
    }
    test();
  }, []);

  useEffect(() => {
    // fileInputRef?.current?.setAttribute("directory", "");
    // fileInputRef?.current?.setAttribute("webkitdirectory", "");

    fileInputRef.current?.addEventListener("change", () => {
      setSuiPath(
        convertWindowsToUnixPath(
          (fileInputRef.current?.files?.item(0) as FileWithPath)?.path
        )
      );
      console.log(fileInputRef.current?.files);
      console.log(
        convertWindowsToUnixPath(
          (fileInputRef.current?.files?.item(0) as FileWithPath)?.path
        )
      );
    });
  }, [fileInputRef]);

  return (
    <>
      <Collapsible trigger="Environments">
        <label>
          <Toggle
            defaultChecked={isSuiCargo}
            icons={false}
            onChange={(e) => setIsSuiCargo(e.target.checked)}
          />
          <span>Sui Cargo</span>
        </label>
        {!isSuiCargo && (
          <>
            <input type="file" ref={fileInputRef} />
            {suiPath && <p>{suiPath}</p>}
          </>
        )}
        <select value={network} onChange={handleNetworkChange}>
          <option>devnet</option>
          <option>testnet</option>
        </select>
        <button>RPC Custom</button>
      </Collapsible>
    </>
  );
};
