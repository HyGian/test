import { NavLink } from "react-router-dom";
import { FiHome, FiBox, FiShoppingCart } from "react-icons/fi";

export default function Sidebar() {
  const links = [
    { to: "/admin/dashboard", icon: <FiHome />, label: "Dashboard" },
    { to: "/admin/products", icon: <FiBox />, label: "Products" },
    { to: "/admin/orders", icon: <FiShoppingCart />, label: "Orders" },
  ];

  return (
    <aside className="w-60 bg-white border-r shadow-sm flex flex-col">
      <div className="p-4 text-xl font-bold border-b">Admin Panel</div>
      <nav className="flex-1 p-4">
        {links.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md mb-2 ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            {icon}
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
