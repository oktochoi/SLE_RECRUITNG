'use client';

import Image from 'next/image';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import styles from './ProjectsPage.module.css';
import { useState } from 'react';
import Link from 'next/link';

export interface Project {
  id: number;
  image: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/1.jpg",
    tags: ["APP"],
    link: "https://www.instagram.com/p/CR6JCAZrBcH/?img_index=1",
  },
  {
    id: 2,
    image: "/2.jpg",
    tags: ["GAME"],
    link: "https://www.instagram.com/p/CSGrmv4pXKS/?img_index=1",
  },
  {
    id: 3,
    image: "/3.jpg",
    tags: ["DATA"],
        link: "https://www.instagram.com/p/CSLqet6pcFo/?img_index=1",

  },
  {
    id: 4,
    image: "/4.jpg",
    tags: ["DATA"],
        link: "https://www.instagram.com/p/CSN8ZYmJIEe/?img_index=1",

  },
    {
    id: 5,
    image: "/5.jpg",
    tags: ["APP"],
        link: "https://www.instagram.com/p/CaHGjUhhabC/?img_index=1",

  },
    {
    id: 6,
    image: "/6.jpg",
    tags: ["GAME"],
        link: "https://www.instagram.com/p/CaHj9BzBlrm/?img_index=1",

  },
    {
    id: 7,
    image: "/7.jpg",
    tags: ["APP"],
        link: "https://www.instagram.com/p/CaJEToOBmRv/?img_index=1",

  },
    {
    id: 8,
    image: "/8.jpg",
    tags: ["APP"],
      link: "https://www.instagram.com/p/Ch4U3tPhONo/?img_index=1",

  },

    {
    id: 9,
    image: "/10.jpg",
    tags: ["WEB"],
        link: "https://www.instagram.com/p/Ch4XdfyBDe2/?img_index=1",

  },
    {
    id: 11,
    image: "/11.jpg",
    tags: ["GAME"],
        link: "https://www.instagram.com/p/CpCh-THhjst/?img_index=1",

  },
    {
    id: 12,
    image: "/12.jpg",
    tags: ["APP"],
        link: "https://www.instagram.com/p/CpCjB1pBpmz/?img_index=1",

  },
    {
    id: 13,
    image: "/13.jpg",
    tags: ["DATA"],
        link: "https://www.instagram.com/p/CpCjruRBo-R/?img_index=1",

  },
    {
    id: 14,
    image: "/14.jpg",
    tags: ["GAME"],
        link: "https://www.instagram.com/p/CpFe7OoB76h/?img_index=1",

  },
    {
    id: 15,
    image: "/15.jpg",
    tags: ["GAME"],
        link: "https://www.instagram.com/p/CxfsOSuP-vZ/?img_index=1",

  },
    {
    id: 16,
    image: "/16.jpg",
    tags: ["APP"],
        link: "https://www.instagram.com/p/Cxfs-RrPiUo/?img_index=1",

  },
    {
    id: 17,
    image: "/17.jpg",
    tags: ["WEB"],
        link: "https://www.instagram.com/p/CxftcrGvk20/?img_index=1",

  },
    {
    id: 18,
    image: "/18.jpg",
    tags: ["DATA"],
        link: "https://www.instagram.com/p/Cxfu9Sqv3U5/?img_index=1",

  },
    {
    id: 19,
    image: "/19.jpg",
    tags: ["WEB"],
        link: "https://www.instagram.com/p/CxfxJ3KvPjU/?img_index=1",

  },
    {
    id: 20,
    image: "/20.jpg",
    tags: ["WEB"],
        link: "https://www.instagram.com/p/C-XJEYKxYYU/?img_index=2",

  },
    {
    id: 21,
    image: "/21.jpg",
    tags: ["WEB"],
        link: "https://www.instagram.com/p/C-XJEYKxYYU/?img_index=4",

  },
      {
    id: 22,
    image: "/23.jpg",
    tags: ["DATA"],
        link: "https://www.instagram.com/p/C-XJEYKxYYU/?img_index=6",

  },
];

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState("ALL");
  const itemsPerPage = 8;

  const tags = ["ALL", "WEB", "APP", "DATA", "GAME"];

  const filteredProjects = selectedTag === "ALL"
    ? projects
    : projects.filter((p) => p.tags.includes(selectedTag));

  const sortedProjects = [...filteredProjects].sort((a, b) => b.id - a.id);
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);

  const currentProjects = sortedProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className={styles.wrapper}>
      <Header />

      <Image
        src="/project.svg"
        alt="project"
        width={840}
        height={1028}
        className={styles.title}
      />

      <div className={styles.filter}>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => {
              setSelectedTag(tag);
              setCurrentPage(1);
            }}
            className={`${styles.filterButton} ${
              selectedTag === tag ? styles.active : ""
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

    <div className={styles.grid}>
      {currentProjects.map((project) => (
        <div key={project.id} className={styles.imageWrapper}>
          {project.link ? (
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.image}
                alt="image"
                width={380}
                height={380}
                className={styles.image}
              />
            </Link>
          ) : (
            <Image
              src={project.image}
              alt="image"
              width={380}
              height={380}
              className={styles.image}
            />
          )}
        </div>
      ))}
    </div>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={styles.paginationButton}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          &lt;
        </button>

        <span className={styles.paginationText}>
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className={styles.paginationButton}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          &gt;
        </button>
      </div>


      <Footer />
    </div>
  );
}