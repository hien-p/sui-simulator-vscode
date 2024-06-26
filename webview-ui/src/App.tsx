import React from "react";
import { EnvironmentIcon } from "./icons/EnvironmentIcon";
import { Tab } from "./components/Tab";
import { UserIcon } from "./icons/UserIcon";
import { RowVerticalIcon } from "./icons/RowVerticalIcon";
import { ExplorerIcon } from "./icons/ExplorerIcon";
import { Link } from "react-router-dom";
import { Logo } from "./components/Logo";

export interface IAppProps {}

export const App: React.FunctionComponent<IAppProps> = ({}: React.PropsWithChildren<IAppProps>) => {
  return (
    <>
      <div className="overflow-hidden w-full relative min-h-screen grow">
        <div className="w-full">
          <div className="ml-10 mt-12 inline-flex flex-col h-[500px] items-start gap-[64px]">
            <div className="relative w-full mt-[-1.00px] [font-family:'Aeonik-Regular',Helvetica] font-normal text-white text-[48px] text-center tracking-[-2.56px] leading-[76.8px] whitespace-nowrap flex flex-row justify-evenly">
              <Logo className="w-[64px] h-[64px]" />
              <div>Sui simulator</div>
            </div>
            <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
              <Link to="/environment">
                <Tab
                  icon={<EnvironmentIcon className="!relative !w-[24px] !h-[24px]" />}
                  title="Environment"
                />
              </Link>
              <Link to="/gas-address">
                <Tab
                  icon={<UserIcon className="!relative !w-[24px] !h-[24px]" />}
                  title="Gases And Address"
                />
              </Link>
              <Link to="build-test-publish">
                <Tab
                  icon={<RowVerticalIcon className="!relative !w-[24px] !h-[24px]" />}
                  title="Build, Test And Publish"
                />
              </Link>
              <Link to="/explorer">
                <Tab
                  icon={<ExplorerIcon className="!relative !w-[24px] !h-[24px]" />}
                  title="Explorer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
