"use client"
import FilterList from "@/stories/components/filters/filterList";
import { IoHomeOutline } from "react-icons/io5";

export default function Home() {
  return <div>
    <FilterList data={[{ id: 1, icon: IoHomeOutline, text: "casa", number: 12 }]}/>
  </div>;
}