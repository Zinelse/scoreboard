import { Users ,Calendar , Brackets } from "lucide-react";
import { ExpandableTabs, TabItem } from "@/components/ui/expandable-tabs";

interface Props {
  onchange?: (index: number | null) => void;
}

export default function SimpleNav(props: Props) {
  const tabs:TabItem[] = [
    { title: "Schedule", icon: Calendar },
    { title: "Standings", icon: Users },
    { title: "KO", icon: Brackets },
    // { type: "separator" },
    // { title: "Profile", icon: User },
  ];

  return (
    <div className="flex flex-col gap-3">
      <ExpandableTabs
        tabs={tabs}
        activeColor="text-red-500"
        onChange={(item: number | null) => {
          console.log(item);
          props.onchange?.(item);
        }}
      />
    </div>
  );
}

// function CustomColorDemo() {
//   const tabs = [
//     { title: "Profile", icon: User },
//     { title: "Messages", icon: Mail },
//     { type: "separator" },
//     { title: "Documents", icon: FileText },
//     { title: "Privacy", icon: Lock },
//   ];

//   return (
//     <div className="flex flex-col gap-4">
//       <ExpandableTabs
//         tabs={tabs}
//         activeColor="text-blue-500"
//         className="border-blue-200 dark:border-blue-800"
//       />
//     </div>
//   );
// }

// export { DefaultDemo, CustomColorDemo };
