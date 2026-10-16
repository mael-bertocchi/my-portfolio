import type { Perhaps } from '@/models';
import { Cloud, Cpu, Database, Globe, type LucideIcon } from 'lucide-react';

/**
 * @interface NavigationItem
 * @description Represents a link of the navigation bar pointing to a section of the home page
 */
export interface NavigationItem {
    id: string; /*!< Identifier of the targeted section */
    labelKey: string; /*!< Translation key of the label */
}

/**
 * @interface ExpertiseItem
 * @description Represents an area of expertise
 */
export interface ExpertiseItem {
    key: string; /*!< Translation key under 'expertise.items' */
    icon: LucideIcon; /*!< Icon illustrating the area */
    tools: string[]; /*!< Main tools used in this area */
}

/**
 * @interface ExperienceItem
 * @description Represents a professional experience
 */
export interface ExperienceItem {
    key: string; /*!< Translation key under 'experience.jobs' */
    logo: string; /*!< Path of the company logo */
    current: boolean; /*!< Whether the position is still held */
}

/**
 * @interface EducationItem
 * @description Represents an academic program
 */
export interface EducationItem {
    key: string; /*!< Translation key under 'education.schools' */
    logo: string; /*!< Path of the school logo */
    current: boolean; /*!< Whether the program is in progress */
}

/**
 * @type ProjectLinkKind
 * @description The kind of destination a project link points to
 */
export type ProjectLinkKind = 'website' | 'github';

/**
 * @interface ProjectItem
 * @description Represents a showcased project
 */
export interface ProjectItem {
    key: string; /*!< Translation key under 'projects.items' */
    url: Perhaps<string>; /*!< Public link of the project, if any */
    linkKind: ProjectLinkKind; /*!< Kind of destination the link points to */
}

/**
 * @constant SOCIAL_LINKS
 * @description External profiles and contact links
 */
export const SOCIAL_LINKS = {
    github: 'https://github.com/mael-bertocchi',
    linkedin: 'https://www.linkedin.com/in/mael-bertocchi',
    email: 'contact@mael-bertocchi.fr',
    phone: '+33761778360',
    phoneLabel: '+33 7 61 77 83 60',
};

/**
 * @constant NAVIGATION_ITEMS
 * @description Sections reachable from the navigation bar
 */
export const NAVIGATION_ITEMS: NavigationItem[] = [
    { id: 'about', labelKey: 'nav.about' },
    { id: 'expertise', labelKey: 'nav.expertise' },
    { id: 'experience', labelKey: 'nav.experience' },
    { id: 'projects', labelKey: 'nav.projects' },
    { id: 'education', labelKey: 'nav.education' },
    { id: 'contact', labelKey: 'nav.contact' },
];

/**
 * @constant EXPERTISE
 * @description Areas of expertise, from the most to the least central
 */
export const EXPERTISE: ExpertiseItem[] = [
    { key: 'web', icon: Globe, tools: ['TypeScript', 'React', 'Node.js'] },
    { key: 'devops', icon: Cloud, tools: ['Azure', 'Dokploy', 'Docker'] },
    { key: 'systems', icon: Cpu, tools: ['C', 'C++', 'Python'] },
    { key: 'data', icon: Database, tools: ['PostgreSQL', 'MongoDB', 'Prisma'] },
];

/**
 * @constant EXPERIENCES
 * @description Professional experiences, most recent first
 */
export const EXPERIENCES: ExperienceItem[] = [
    { key: 'jet-aviation', logo: '/logos/jet-aviation.webp', current: false },
    { key: 'epitech', logo: '/logos/epitech.webp', current: false },
    { key: 'cap-vision', logo: '/logos/cap-vision.webp', current: false },
];

/**
 * @constant EDUCATION
 * @description Academic programs, most recent first
 */
export const EDUCATION: EducationItem[] = [
    { key: 'epitech', logo: '/logos/epitech.webp', current: true },
    { key: 'ionis-stm', logo: '/logos/ionis-stm.webp', current: false },
];

/**
 * @constant PROJECTS
 * @description Showcased projects, most recent first
 */
export const PROJECTS: ProjectItem[] = [
    { key: 'baselhack', url: 'https://github.com/mael-bertocchi/baselhack-2025', linkKind: 'github' },
    { key: 'hungry-no', url: 'https://www.hungryno.fr', linkKind: 'website' },
    { key: 'logeler-finka', url: 'https://www.logelerfinka.fr', linkKind: 'website' },
    { key: 'france-equipement', url: undefined, linkKind: 'website' },
];
