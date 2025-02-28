import OnePage from "@/components/one-page";
import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";
import OrbitingIcons from "../components/orbit";
import { DefaultContext } from "./__root";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

export default function Contact() {
  const isDefault = useContext(DefaultContext);

  return <>{isDefault ? <OrbitingIcons /> : <OnePage />}</>;
}
