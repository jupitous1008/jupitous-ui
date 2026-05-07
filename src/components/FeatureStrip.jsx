import {
  ShieldCheck,
  Zap,
  Leaf,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Reliable & Safe",
    desc: "High quality products for long lasting usage.",
    color: "#22c55e",
  },
  {
    icon: Zap,
    title: "High Performance",
    desc: "Advanced technology for maximum efficiency.",
    color: "#2563eb",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    desc: "Clean energy solutions for a better tomorrow.",
    color: "#22c55e",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "24/7 support for all your needs.",
    color: "#2563eb",
  },
];

export default function FeatureStrip() {
  return (
    <div
      style={{
        width: "100%",

        // ✅ CHANGE HERE
        // BEFORE: background: "#f5f5f5",
        background: "transparent",

        // ✅ CHANGE HERE
        // BEFORE: padding: "40px 20px",
        padding: "0px 20px",

        display: "flex",
        justifyContent: "center",

        // ✅ ADD HERE
        marginTop: "-65px",

        // ✅ ADD HERE
        position: "relative",
        zIndex: 20,
      }}
    >
      {/* MAIN CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          overflow: "hidden",
        }}
      >
        {/* HORIZONTAL CONTAINER */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "30px",
                  borderRight:
                    index !== features.length - 1
                      ? "1px solid #e5e7eb"
                      : "none",
                }}
              >
                {/* ICON */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: "#f9fafb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    size={30}
                    color={item.color}
                    strokeWidth={2}
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "#6b7280",
                      lineHeight: "22px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}