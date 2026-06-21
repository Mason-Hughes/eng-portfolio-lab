import gosselinAssemblyClean from "@/assets/gosselin/img-07.jpg";
import gosselinAssemblyAnnotated from "@/assets/gosselin/img-05.jpg";
import gosselinUniversal from "@/assets/gosselin/img-01.jpg";
import gosselinUniversalCallout from "@/assets/gosselin/img-02.jpg";
import gosselinSpherical from "@/assets/gosselin/img-03.jpg";
import gosselinRevolute from "@/assets/gosselin/img-04.jpg";
import gosselinBase from "@/assets/gosselin/img-08.jpg";
import gosselinBaseDrawing from "@/assets/gosselin/img-09.jpg";
import gosselinWorkspace from "@/assets/gosselin/img-10.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export type ProjectSpec = { label: string; value: string };

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle?: string;
  role: string;
  year: string;
  client?: string;
  summary: string;
  cover: string;
  tags: string[];
  problem: string;
  approach: string[];
  outcome: string[];
  specs: ProjectSpec[];
  gallery: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "gosselin-platform",
    index: "01",
    title: "Gosselin Platform",
    subtitle: "Novel 9-DOF Kinematically Redundant Parallel Robot",
    role: "Mechanical Design & Fabrication Lead",
    year: "2023",
    client: "UBC Advanced Robotics Laboratory",
    summary:
      "Physical prototype of a novel 9-DOF parallel robot — a redundant evolution of the Stewart platform designed to avoid kinematic singularities across a vastly larger workspace.",
    cover: gosselinAssemblyClean,
    tags: ["Parallel Robotics", "SolidWorks", "MATLAB", "Mechanism Design"],
    problem:
      "Traditional Stewart platforms hit kinematic singularities long before reaching the orientations needed for many manipulation tasks. The Advanced Robotics Lab at UBC needed the first physical realization of a Gosselin platform — a kinematic architecture proposed theoretically in 2016 that adds three redundant linear actuators to dramatically expand the singularity-free workspace. My team was tasked with taking the math off the page and turning it into a functioning, payload-carrying mechanism.",
    approach: [
      "Selected linear actuators for the mechanism's nine prismatic joints, balancing stroke length, force, footprint, and cost.",
      "Built a fully parametric SolidWorks model of the assembly, driving downstream detail design from a single source of truth.",
      "Authored a MATLAB kinematic simulation to validate the singularity-avoidant workspace before committing to fabrication.",
      "Designed every load-bearing component in-house: end-effector, spherical joints, non-redundant couplings, revolute joints, universal joints, base platform, and pedestal.",
      "Managed manufacturing and assembly across machined, fabricated, and off-the-shelf components within a $30k+ project budget.",
    ],
    outcome: [
      "Achieved 180° of twist about the Z axis — more than 2× the original 75–80° target.",
      "Achieved a full 90° of tilt from the end-effector to the X-Y plane, meeting the upper bound of the spec.",
      "MATLAB control script delivers singularity-avoidant trajectories across the full envelope.",
      "Functioning physical platform delivered to UBC ARL for ongoing research use.",
    ],
    specs: [
      { label: "Degrees of Freedom", value: "9 (6 task + 3 redundant)" },
      { label: "Twist (Z-axis)", value: "180° achieved · 75–80° target" },
      { label: "Tilt (from X-Y)", value: "90° achieved · 60–90° target" },
      { label: "Z-axis Travel", value: "30–50 cm" },
      { label: "Payload Capacity", value: "35–50 kg" },
      { label: "Project Budget", value: "$30k+" },
      { label: "Tools", value: "SolidWorks · MATLAB" },
      { label: "Client", value: "UBC Advanced Robotics Lab" },
    ],
    gallery: [
      { src: gosselinAssemblyAnnotated, caption: "Full assembly — labeled actuators, joints, end-effector, and base platform." },
      { src: gosselinUniversal, caption: "Universal joint — supports each actuator with 2-axis rotation at the base." },
      { src: gosselinUniversalCallout, caption: "Universal joint exploded callouts — pillow-block bearing, shaft clamp, U-bracket, sleeve bearing." },
      { src: gosselinSpherical, caption: "Spherical joint — supports the end-effector with 3-axis rotation." },
      { src: gosselinRevolute, caption: "Revolute joint — couples redundant actuators at stroke ends with free pinned rotation." },
      { src: gosselinBase, caption: "Base platform — mounts all nine universal joints in a common plane." },
      { src: gosselinBaseDrawing, caption: "Base platform — manufacturing drawing." },
      { src: gosselinWorkspace, caption: "Workspace polar diagram for the base layout." },
    ],
  },
  {
    slug: "precision-linear-actuator",
    index: "02",
    title: "Precision Linear Actuator",
    role: "Mechanical Engineer",
    year: "2023",
    summary:
      "Compact ballscrew-driven actuator with sub-10µm repeatability for inline metrology. Designed the housing, preload stack, and thermal compensation strategy.",
    cover: project2,
    tags: ["Precision", "Tolerance Stack", "Machining"],
    problem:
      "An inline metrology station required a compact linear stage with sub-10µm repeatability in a thermally noisy environment, at a fraction of the cost of available off-the-shelf options.",
    approach: [
      "Specified a preloaded ballscrew and matched recirculating ball bearing stack to eliminate axial backlash.",
      "Detailed a hard-anodized aluminum housing with integrated cable management and a sealed end-cap.",
      "Worked the tolerance stack from the encoder mount through the carriage to the tool interface.",
      "Designed a thermal compensation reference using an Invar standoff to decouple the encoder from housing growth.",
    ],
    outcome: [
      "Sub-10µm repeatability validated across the operating temperature range.",
      "30% lower BOM cost vs. the closest off-the-shelf alternative at equivalent performance.",
      "Drop-in replacement for the prior generation — no host-machine changes required.",
    ],
    specs: [
      { label: "Repeatability", value: "< 10 µm" },
      { label: "Stroke", value: "100 mm" },
      { label: "Drive", value: "Preloaded ballscrew" },
      { label: "Materials", value: "6061-T6 hard anodized · Invar reference" },
      { label: "Tools", value: "SolidWorks · GD&T per ASME Y14.5" },
    ],
    gallery: [{ src: project2, caption: "Isometric assembly view." }],
  },
  {
    slug: "modular-conveyor-platform",
    index: "03",
    title: "Modular Conveyor Platform",
    role: "Mechanical Design",
    year: "2023",
    summary:
      "Reconfigurable belt module for industrial sortation. Standardized frame extrusions, quick-swap drive heads, and a snap-fit guarding system used across three product lines.",
    cover: project3,
    tags: ["Automation", "Sheet Metal", "Modularity"],
    problem:
      "Three sortation product lines were each carrying bespoke conveyor designs, driving up SKU count, lead time, and field-service burden. The team needed a single modular platform that could span all three.",
    approach: [
      "Defined a standardized extruded-aluminum frame profile shared across all module lengths.",
      "Designed quick-swap drive heads with a common mounting pattern, supporting three motor classes.",
      "Specified a snap-fit polycarbonate guarding system to eliminate guard-specific fasteners.",
      "Authored DFM documentation and supplier drawings for the first production run.",
    ],
    outcome: [
      "Unified BOM across three product lines, cutting unique part count by ~40%.",
      "Field swap time for a failed drive head dropped from hours to minutes.",
      "Platform adopted as the standard for all new sortation development.",
    ],
    specs: [
      { label: "Module Lengths", value: "0.5 m · 1.0 m · 2.0 m" },
      { label: "Belt Width", value: "300 mm" },
      { label: "Frame", value: "Anodized 6063 extrusion" },
      { label: "Drive Options", value: "3 motor classes, common pattern" },
    ],
    gallery: [{ src: project3, caption: "Module with drive head and guarding installed." }],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
