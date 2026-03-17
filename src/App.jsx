import { useState } from "react";

export default function App() {
  const [size, setSize] = useState("M");
  const [hovered, setHovered] = useState(null);

  const categories = [
    {
      title: "T-Shirts",
      items: [{ id: 1, name: "Custom T-Shirt", price: 349, img: "https://via.placeholder.com/300" }]
    },
    {
      title: "T-Shirts",
      items: [{ id: 2, name: "Custom T-Shirt", price: 449, img: "https://via.placeholder.com/300" }]
    },
    {
      title: "Hoodies",
      items: [{ id: 3, name: "Custom Hoodie", price: 899, img: "https://via.placeholder.com/300" }]
    }
  ];

  const orderNow = (name) => {
    const phone = "919993452458";
    const message = `Hi, I want a custom ${name}\nSize: ${size}\nDesign idea:\nAddress:\n(50% advance / 50% on delivery)`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <h2 style={styles.logo}>👑 Samraj Wear</h2>
        <span style={styles.tag}>Custom Print On Demand</span>
      </div>

      {/* Hero */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Design Your Own Style 🔥</h1>
        <p style={styles.heroSub}>We print your ideas on premium clothing</p>
      </div>

      {/* Policy */}
      <div style={styles.policy}>
        💰 35% Advance | 🚚 65% On Delivery | 🎨 Custom Design Support | 📍 Currently serving only Dewas 
      </div>

      {/* Categories */}
      <div style={styles.grid}>
        {categories.map((cat, i) => (
          <div key={i} style={styles.column}>
            <h2 style={styles.colTitle}>{cat.title}</h2>

            {cat.items.map((item) => {
              const isHover = hovered === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    ...styles.card,
                    transform: isHover ? "translateY(-6px) scale(1.02)" : "scale(1)",
                    boxShadow: isHover
                      ? "0 12px 25px rgba(0,0,0,0.6)"
                      : "0 5px 10px rgba(0,0,0,0.4)"
                  }}
                >
                  <img src={item.img} alt="" style={styles.img} />
                  <h3>{item.name}</h3>
                  <p style={styles.price}>₹{item.price}</p>

                  {/* Size */}
                  <div>
                    {["S", "M", "L", "XL"].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        style={{
                          ...styles.sizeBtn,
                          background: size === s ? "#38bdf8" : "#1e293b"
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => orderNow(item.name)}
                    style={{
                      ...styles.btn,
                      transform: isHover ? "scale(1.05)" : "scale(1)"
                    }}
                  >
                    Customize & Order 🚀
                  </button>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={styles.footer}>© 2026 Samraj Wear</div>
    </div>
  );
}

const styles = {
  container: {
    background: "#0f172a",
    color: "white",
    fontFamily: "Poppins",
    minHeight: "100vh"
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 16px",
    flexWrap: "wrap"
  },
  logo: { color: "#38bdf8", fontSize: "clamp(18px,4vw,24px)" },
  tag: { fontSize: "12px", opacity: 0.7 },
  hero: {
    textAlign: "center",
    padding: "20px 10px"
  },
  heroTitle: {
    fontSize: "clamp(22px,6vw,36px)"
  },
  heroSub: { opacity: 0.7, fontSize: "clamp(12px,3vw,16px)" },
  policy: {
    textAlign: "center",
    background: "#1e293b",
    padding: "8px",
    margin: "10px",
    borderRadius: "8px",
    fontSize: "clamp(12px,3vw,14px)"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
    padding: "15px"
  },
  column: {
    background: "#020617",
    padding: "12px",
    borderRadius: "10px"
  },
  colTitle: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#38bdf8",
    fontSize: "clamp(16px,4vw,20px)"
  },
  card: {
    background: "#1e293b",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "12px",
    transition: "0.3s"
  },
  img: {
    width: "100%",
    borderRadius: "8px"
  },
  price: { color: "#38bdf8" },
  sizeBtn: {
    margin: "3px",
    padding: "4px 7px",
    border: "none",
    borderRadius: "5px",
    color: "white",
    fontSize: "12px"
  },
  btn: {
    marginTop: "8px",
    width: "100%",
    padding: "8px",
    background: "#22c55e",
    border: "none",
    borderRadius: "6px",
    color: "white",
    fontSize: "13px",
    transition: "0.3s"
  },
  footer: {
    textAlign: "center",
    padding: "12px",
    opacity: 0.6,
    fontSize: "12px"
  }
};