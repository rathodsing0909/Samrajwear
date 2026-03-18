import { useState } from "react";

import logo from "./assets/logoi.png";
import img1 from './assets/tshirt1.png';
import img2 from './assets/tshirt2.png';
import img3 from './assets/hoodie1.png';
import img4 from './assets/dailycombo.png';


export default function App() {
  const [size, setSize] = useState("M");
  const [hovered, setHovered] = useState(null);

  const categories = [
    {
      title: "T-Shirts",
      items: [
        { id: 1, name: "Custom T-Shirt 1", price: 349, img: (img2) },
        { id: 2, name: "Custom T-Shirt 2", price: 399, img:(img1) }
      ]
    },
    {
      title: "Hoodies",
      items: [{ id: 3, name: "Custom Hoodie", price: 899, img: (img3) }]
    },
    {
      title: "Daily Wear Combo",
      items: [{ id: 4, name: "Lower T-Shirt", price: 399, img:(img4) }]
    }
  ];

  const orderNow = (itemName) => {
    const phone = "919993452458";
    const message1 = `Hi, I want a ${itemName}\nSize: ${size}\nDesign idea:\nAddress:\nContact:\n(35% advance / 65% on delivery)`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message1)}`, "_blank");

    const message2 = `Your order is received and we will update you within 2 hours about how your item will look.`;
    setTimeout(() => {
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message2)}`, "_blank");
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
       <img src={logo} alt="logo" style={styles.logoImg} />
        <span style={styles.tag}>Custom Print On Demand</span>
      </div>

      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Design Your Own Style 🔥</h1>
        <p style={styles.heroSub}>We print your ideas on premium clothing</p>
      </div>

      <div style={styles.policy}>
        💰 35% Advance | 🚚 65% On Delivery | 🎨 Custom Design Support | 📍 Currently serving only Dewas
      </div>

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
                  <img src={item.img} alt={item.name} style={styles.img} />
                  <h3>{item.name}</h3>
                  <p style={styles.price}>₹{item.price}</p>

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
        <div className="div">
          <p>2 hours design preview</p>
          <p>Customer order</p>
        </div>
      </div>

      <div style={styles.footer}>© 2026 Samraj Wear</div>
    </div>
  );
}

const styles = {
  logoImg: {
  width: "150px",
  height: "150px",
  borderRadius: "50%"
},
  container: { background: "#0f172a", color: "white", fontFamily: "'Poppins', sans-serif", minHeight: "100vh", paddingBottom: "20px" },
  navbar: { display: "flex", justifyContent: "space-between", padding: "6px 10px", flexWrap: "wrap", alignItems: "center" },
  logo: { color: "#38bdf8", fontSize: "clamp(18px,4vw,28px)", fontWeight: "bold" },
  tag: { fontSize: "14px", opacity: 0.7 },
  hero: { textAlign: "center", padding: "20px 10px" },
  heroTitle: { color: "#edd015", fontSize: "clamp(22px,6vw,36px)", fontWeight: "bold" },
  heroSub: { opacity: 0.8, fontSize: "clamp(12px,3vw,18px)" },
  policy: { textAlign: "center", background: "#1e293b", padding: "10px", margin: "10px 20px", borderRadius: "10px", fontSize: "clamp(12px,3vw,14px)" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px", padding: "15px" },
  column: { background: "#020617", padding: "12px", borderRadius: "12px" },
  colTitle: { textAlign: "center", marginBottom: "12px", color: "#38bdf8", fontSize: "clamp(16px,4vw,20px)", fontWeight: "bold" },
  card: { background: "#1e293b", padding: "10px", borderRadius: "12px", marginBottom: "15px", transition: "0.3s", cursor: "pointer" },
  img: { width: "100%", borderRadius: "8px", marginBottom: "8px" },
  price: { color: "#38bdf8", fontWeight: "bold" },
  sizeBtn: { margin: "3px", padding: "4px 7px", border: "none", borderRadius: "5px", color: "white", fontSize: "12px", cursor: "pointer" },
  btn: { marginTop: "10px", width: "100%", padding: "8px", background: "#22c55e", border: "none", borderRadius: "6px", color: "white", fontSize: "13px", transition: "0.3s", cursor: "pointer" },
  footer: { textAlign: "center", padding: "12px", opacity: 0.6, fontSize: "12px" }
};