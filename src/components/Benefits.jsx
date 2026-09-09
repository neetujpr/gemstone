import { Diamond, Leaf, ShieldCheck, Truck } from "lucide-react";

export default function Benefits() {
  return (
    <section className="benefits">
      <div><Diamond size={22}/><span>100% Authentic Gemstones</span></div>
      <div><Truck size={22}/><span>Worldwide Shipping</span></div>
      <div><ShieldCheck size={22}/><span>Secure Payments</span></div>
      <div><Leaf size={22}/><span>Easy Returns</span></div>
    </section>
  );
}
