import { NodeIcon } from "./icons/NodeIcon";

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <NodeIcon />
      <span
        className="text-[22px] font-semibold tracking-[-0.4px] text-white"
        style={{ letterSpacing: "-0.02em" }}
      >
        SearchNode
      </span>
    </div>
  );
}
