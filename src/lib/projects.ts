import gosselinAssemblyClean from "@/assets/gosselin/img-07.jpg";
import gosselinAssemblyAnnotated from "@/assets/gosselin/img-05.jpg";
import gosselinUniversal from "@/assets/gosselin/img-01.jpg";
import gosselinUniversalCallout from "@/assets/gosselin/img-02.jpg";
import gosselinSpherical from "@/assets/gosselin/img-03.jpg";
import gosselinRevolute from "@/assets/gosselin/img-04.jpg";
import gosselinBase from "@/assets/gosselin/img-08.jpg";
import gosselinBaseDrawing from "@/assets/gosselin/img-09.jpg";
import gosselinWorkspace from "@/assets/gosselin/img-10.jpg";
import feRadiatorCover from "@/assets/formula-electric/cover.jpg";
import cableCover from "@/assets/cable-climber/cover.jpg";
import cableFinal2 from "@/assets/cable-climber/final-2.jpg";
import cableCadExploded from "@/assets/cable-climber/cad-exploded.jpg";
import cableCadTop from "@/assets/cable-climber/cad-top.jpg";
import cableEarly from "@/assets/cable-climber/prototype-early.jpg";
import cableComp1 from "@/assets/cable-climber/prototype-comp-1.jpg";
import cableComp2 from "@/assets/cable-climber/prototype-comp-2.jpg";
import cableRound1 from "@/assets/cable-climber/round1.jpg";
import cableRound2 from "@/assets/cable-climber/round2.jpg";
import cableRound3 from "@/assets/cable-climber/round3.jpg";
import cableRound4 from "@/assets/cable-climber/round4.jpg";
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
    slug: "formula-electric-radiator",
    index: "02",
    title: "Formula Electric Radiator Package",
    subtitle: "Optimized radiators and cooling-system characterization",
    role: "Thermal & Mechanical Design",
    year: "2024",
    client: "UBC Formula Electric",
    summary:
      "Loose design outline for a compact, high-performance radiator package and test plan to characterize thermal loads and cooling requirements for a Formula Electric race car.",
    cover: feRadiatorCover,
    tags: ["Thermal Design", "Formula Electric", "Testing", "Heat Exchangers"],
    problem:
      "Formula Electric cars push electric powertrains hard for extended periods, so the cooling system must reject enough heat while staying light, compact, and aerodynamically clean. The team needed a structured approach to size the radiator, choose the fan and ducting strategy, and define a test program that proves the package meets track demands before the car is built.",
    approach: [
      "Map heat sources: motor, inverter, battery pack, and any auxiliary loops, with estimated continuous and peak heat rejection targets.",
      "Build a simplified thermal model to relate coolant flow rate, radiator core size, air-side pressure drop, and ambient conditions to steady-state temperatures.",
      "Trade radiator core geometry (tube/fin density, thickness, material) against packaging envelope, mass, and cost using vendor data and hand calculations.",
      "Sketch ducting and fan integration to maximize useful airflow through the core while minimizing drag and bypass leakage.",
      "Outline a bench-test plan: flow-loop characterization, steady-state heat-rejection curves, fan performance mapping, and on-track temperature logging.",
      "Define pass/fail criteria linking test data back to lap-time simulations and component temperature limits.",
    ],
    outcome: [
      "Drafted a complete thermal load summary and radiator sizing rationale for the team design review.",
      "Proposed a test matrix that isolates radiator, fan, and ducting contributions to reduce track-side risk.",
      "Identified key specs and sensors needed to validate the cooling system under representative conditions.",
    ],
    specs: [
      { label: "Vehicle Class", value: "Formula Electric" },
      { label: "Heat Rejection Target", value: "TBD by powertrain analysis" },
      { label: "Radiator Core", value: "Aluminum tube-and-fin, size TBD" },
      { label: "Cooling Loops", value: "Motor / inverter / battery (multi-loop)" },
      { label: "Test Methods", value: "Flow loop, wind-tunnel/bench fan map, on-track logging" },
      { label: "Tools", value: "Hand calcs · Excel/MATLAB · SolidWorks (packaging)" },
      { label: "Client", value: "UBC Formula Electric" },
    ],
    gallery: [
      { src: feRadiatorCover, caption: "Concept render of the Formula Electric radiator and cooling package." },
    ],
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
  {
    slug: "cable-climber",
    index: "04",
    title: "Cable Climber",
    subtitle: "1st-place competition device — cable-traversing payload mover",
    role: "Mechanical Design & Fabrication (Team of 6)",
    year: "2022",
    client: "MECH 233 Design Competition · UBC",
    summary:
      "Battery-powered device that travels along a tensioned cable, retrieves slack line, and lifts a payload at a 90° angle of ascent. Placed 1st of 20 teams.",
    cover: cableCover,
    tags: ["Mechanism Design", "Sheet Metal", "Drivetrain", "Prototyping"],
    problem:
      "Hanging-By-A-Thread Inc. sponsored a four-round design competition: build a device that retrieves 2 m of slack cable, traverses 1.8 m of horizontal cable, climbs 1.8 m of inclined cable, and lifts a payload — all on the same chassis, within strict mass and material constraints. Twenty teams competed. Scoring weighted speed and angle of ascent heavily, so the design had to be fast, light, and capable of climbing near-vertical cable.",
    approach: [
      "Ran a stakeholder analysis and translated needs into measurable requirements with metrics and thresholds.",
      "Functionally decomposed the device into six top-level functions and built a morphological chart of dozens of concept fragments.",
      "Generated ten complete concepts, ran primary screening with MATLAB and hand calculations, then a weighted decision matrix to narrow the field.",
      "Optimized three finalist designs independently, then ran a pseudo-competition to pick the most reliable scorer.",
      "Iterated through low-fidelity, analytical (Excel + MATLAB), and comprehensive physical prototypes to de-risk every subsystem before competition day.",
      "Detailed the final design: 1 mm aluminum side plates with triangulated cutouts, plastic snap-in bushings, brass standoffs, set-screw collars, and a 1:12.5 gear reduction balancing speed and climbing torque.",
    ],
    outcome: [
      "1st place out of 20 teams with a total revenue score of 963.3.",
      "Successfully climbed cable at a 90° angle of ascent — the maximum allowable, maximizing Round 3 and 4 scoring.",
      "Zero technical failures across all four competition rounds.",
      "Three-point cable contact geometry generated enough wrap-angle friction to drive the device without supplementary clamping.",
    ],
    specs: [
      { label: "Result", value: "1st of 20 teams · score 963.3" },
      { label: "Angle of Ascent", value: "90° (vertical climb)" },
      { label: "Drivetrain", value: "DC motor · 1:12.5 gear reduction" },
      { label: "Frame", value: "1 mm aluminum side plates, brass hex standoffs" },
      { label: "Cable Interface", value: "3-point contact · grooved pulley bearings" },
      { label: "Tools", value: "SolidWorks · MATLAB · Excel" },
      { label: "Team", value: "6 mechanical engineering students" },
    ],
    gallery: [
      { src: cableFinal2, caption: "Final device — alternate angle showing drive wheel and cable path." },
      { src: cableCadExploded, caption: "Exploded isometric CAD — drivetrain, frame, and cable guides." },
      { src: cableCadTop, caption: "Top-view CAD model — gear train and motor mounting layout." },
      { src: cableEarly, caption: "Early low-fidelity prototype — studying cable behaviour over a rotating pulley." },
      { src: cableComp1, caption: "Comprehensive physical prototype — one of three late-stage iterations." },
      { src: cableComp2, caption: "Comprehensive physical prototype — frame, drivetrain, and cable guides assembled." },
      { src: cableRound1, caption: "Round 1 — retrieving 2 m of slack cable through the front guide." },
      { src: cableRound2, caption: "Round 2 — horizontal traverse along 1.8 m of tensioned cable." },
      { src: cableRound3, caption: "Round 3 — 90° vertical ascent along 1.8 m of cable." },
      { src: cableRound4, caption: "Round 4 — vertical ascent carrying a payload via wire hook." },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
