import "./Blog.css";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Mantenimiento de torniquetes de acceso",
    image: "img/blog1.png",
    excerpt: "Cada qué tiempo mi torniquete de acceso necesita mantenimiento",
    content:
      "El mantenimiento de los torniquetes de acceso debe realizarse cada 6 meses para garantizar su correcto funcionamiento. Esto incluye lubricación de partes móviles, verificación de sensores y prueba de los mecanismos de seguridad.",
  },
  {
    id: 2,
    title: "Otro artículo de ejemplo",
    image: "img/blog2.png",
    excerpt: "Este es un resumen de otro artículo interesante",
    content:
      "Contenido completo del otro artículo interesante que tiene mucha más información relevante para los lectores.",
  },
  // Puedes agregar más artículos aquí
];

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);

  const togglePost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <main className="blog-container">
      <h1>Nuestro Blog</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div
              className="blog-card-header"
              onClick={() => togglePost(post.id)}
            >
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>

            {expandedPost === post.id && (
              <div className="blog-card-content">
                <p>{post.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
