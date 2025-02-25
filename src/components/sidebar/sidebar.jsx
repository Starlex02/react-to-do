"use client";

import styles from "./sidebar.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  return (
    <aside>
      <nav className={styles.sidebar}>
        <Search />
        <Menu />
      </nav>
    </aside>
  );
}

function Search() {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
}

function Menu() {
  return (
    <ul className={styles.menu}>
      <MenuItem url="/today" value="Today" />
      <MenuItem url="/important" value="Important" />
      <MenuItem url="/planned" value="Planned" />
      <MenuItem url="/tasks" value="Tasks" />
    </ul>
  );
}

function MenuItem({ url, value }) {
  return (
    <li className={styles.menuItem}>
      <Link href={url} className={styles.menuItem} scroll={false}>
        {value}
      </Link>
    </li>
  );
}
