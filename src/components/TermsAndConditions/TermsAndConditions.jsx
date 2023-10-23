import "./TermsAndConditions.css";

let links = [
  { name: "Term of services" },
  { name: "Term of services" },
  { name: "Privacy Policy" },
  { name: "Accessibility" },
  { name: "Ads info" },
  { name: "More..." },
];

export default function TermsAndConditions() {
  return (
    <div className="more-links">
      {links.map((link) => {
        return <a href="#link">{link.name}</a>;
      })}
    </div>
  );
}
