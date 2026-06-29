import copperHeSection from "@/assets/copper-he/photo-8.png";
import copperHeAssembled from "@/assets/copper-he/photo-9.png";
import copperHeTopView from "@/assets/copper-he/photo-10.png";
import copperHeFourUp from "@/assets/copper-he/photo-11.png";
import copperHeStackSide from "@/assets/copper-he/photo-12.png";
import copperHeStackTop from "@/assets/copper-he/photo-13.png";
import copperHeDiskPhoto from "@/assets/copper-he/photo-14.png";
import powderFeederFull from "@/assets/powder-feeder/full-section.png";
import powderFeederHopper from "@/assets/powder-feeder/hopper-section.png";
import powderFeederGearbox from "@/assets/powder-feeder/gearbox-section.png";
import powderFeederGearDetail from "@/assets/powder-feeder/gear-detail.png";
import gosselinAssemblyClean from "@/assets/gosselin/img-07.jpg";
import gosselinAssemblyAnnotated from "@/assets/gosselin/img-05.jpg";
import gosselinUniversal from "@/assets/gosselin/img-01.jpg";
import gosselinUniversalCallout from "@/assets/gosselin/img-02.jpg";
import gosselinSpherical from "@/assets/gosselin/img-03.jpg";
import gosselinRevolute from "@/assets/gosselin/img-04.jpg";
import gosselinBase from "@/assets/gosselin/img-08.jpg";
import gosselinBaseDrawing from "@/assets/gosselin/img-09.jpg";
import gosselinWorkspace from "@/assets/gosselin/img-10.jpg";

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
  video?: { embedUrl: string; caption: string };
};

export const projects: Project[] = [
  {
    slug: "copper-heat-exchanger",
    index: "01",
    title: "Copper Heat Exchanger",
    subtitle: "High-temperature gas-to-cartridge heat exchanger stack",
    role: "Mechanical Design & Thermal Analysis",
    year: "2025",
    client: "Research / Test Facility",
    summary:
      "Bolted stack of nickel-plated copper disks between SS 304 lids, heated by embedded cartridges and sealed for 800 psi gas service. Sized for a 450 °C operating ceiling governed by cartridge wire-lead limits.",
    cover: copperHeSection,
    tags: ["Heat Transfer", "Pressure Sealing", "Thermal Stress", "DFM"],
    problem:
      "The test rig needed a compact heat exchanger that could heat a high-pressure gas stream by direct contact with embedded cartridge heaters, hold 800 psi without leaking through stacked gaskets, and survive repeated thermal cycling. The design had to balance copper's thermal conductivity against its poor high-temperature strength, while keeping bolt preload inside the elastic region across the full operating temperature range.",
    approach: [
      "Stacked eight Ø6\" × 1\" nickel-plated copper disks between two SS 304 cap plates, with Flexitallic gaskets at each interface for 800 psi sealing.",
      "Plated the copper with electroless nickel to prevent oxidation and galvanic interaction with the steel hardware at temperature.",
      "Tied the stack together with 18 × 3/8\"-16 ASTM A193 B16 threaded rods and A194 Grade 7 nuts (double-nutted) for creep-tolerant clamping.",
      "Drilled six Ø<3/8\" × 6\" cartridge-heater pockets through the stack to deliver heat directly into the copper core.",
      "Worked the bolt-preload / thermal-expansion math: 5031 N preload per rod with a 1.5× design factor, leaving ~0.71 mm of stretch headroom for differential expansion before yield.",
      "Set the operating ceiling at 450 °C — governed by the cartridge wire-lead limit — and called out a nut replacement cadence to manage long-term creep.",
      "Built out a 4-up mounting assembly (mild-steel lid plates, L-angle frame, C-channel rails) so multiple exchangers can run in parallel on the same bench.",
    ],
    outcome: [
      "Validated a clamping scheme that stays elastic across the 450 °C operating range, even at the conservative \"no rod expansion\" bound (≈188 °C ΔT margin).",
      "Delivered a full BOM and vendor list — copper, SS lids, B16 rods, Flexitallic gaskets, A194-7 nuts, cartridge heaters, NPT-JIC fittings — pricing three exchangers at ~$11.8k.",
      "Mounting frame sized to host four exchangers in parallel for ~$685 of additional structural cost.",
    ],
    specs: [
      { label: "Gas Pressure", value: "800 psi (5.52 MPa)" },
      { label: "Max Operating Temp", value: "450 °C (cartridge lead-limited)" },
      { label: "Copper Disks", value: "8 × Ø6\" × 1\", nickel-plated" },
      { label: "Lids", value: "2 × SS 304, Ø6\" × ¼\"" },
      { label: "Tie Rods", value: "18 × 3/8\"-16, ASTM A193 B16" },
      { label: "Nuts", value: "72 × ASTM A194 Grade 7 (double-nutted)" },
      { label: "Gaskets", value: "7 × Flexitallic, ID 4\" / OD 4.583\"" },
      { label: "Heat Cartridges", value: "6 × <3/8\" Ø × 6\" long" },
      { label: "Bolt Preload", value: "5031 N/rod (1.5× design factor)" },
      { label: "Ports", value: "½\" NPT → ½\" JIC" },
      { label: "Tools", value: "SolidWorks · Hand calcs (ASME)" },
    ],
    gallery: [
      { src: copperHeSection, caption: "CAD section view — three-disk stack between SS 304 lids showing internal flow geometry and tie-rod pattern." },
      { src: copperHeDiskPhoto, caption: "Single nickel-plated copper disk — radial flow slots and outer tie-rod hole pattern." },
      { src: copperHeStackTop, caption: "Top-down view into the assembled stack — central flow geometry framed by tie rods." },
      { src: copperHeStackSide, caption: "Side view of the stacked copper disks clamped between cap plates by the tie-rod array." },
      { src: copperHeAssembled, caption: "Fully assembled exchanger on the bench — torqued tie-rod pattern and instrumented gas ports." },
      { src: copperHeTopView, caption: "Cap-plate face — bolt circle, central port, and tie-rod hole pattern." },
      { src: copperHeFourUp, caption: "Four exchangers mounted in parallel on the shared bench frame." },
    ],
  },
  {
    slug: "powder-feeder",
    index: "02",
    title: "High-Pressure Powder Feeder",
    subtitle: "Precision 25 µm powder feeding into pressurized gas flow",
    role: "Mechanical Design",
    year: "2024",
    client: "Industrial Additive Manufacturing",
    summary:
      "Pressure-rated powder feeder designed to deliver 25 µm powder smoothly and consistently into a high-pressure carrier gas stream, rated to 1 000 psi.",
    cover: powderFeederFull,
    tags: ["Powder Handling", "High-Pressure Design", "Process Equipment", "DFM"],
    problem:
      "Fine powders — especially 25 µm particles — agglomerate, bridge, and pulsate when fed into a high-pressure gas stream. Existing feeders either can't hold pressure past a few hundred psi or introduce unacceptable variation in mass flow rate. The application needed a compact, shop-buildable feeder that maintains steady entrainment of 25 µm powder at up to 1 000 psi while staying clean enough for repeated disassembly and refill.",
    approach: [
      "Sized the pressure vessel and wetted parts for a 1 000 psi working pressure with an ASME VIII-1-inspired safety factor and all 316L stainless wetted surfaces.",
      "Selected a precision auger metering screw with variable-speed gear drive to translate hopper level changes into a controlled, repeatable mass flow rate.",
      "Designed a conical hopper with optional mechanical agitation to break arches and prevent bridging of fine, cohesive powder.",
      "Integrated a fluidization chamber just upstream of the carrier gas inlet to precondition the powder and smooth pulsation before entrainment.",
      "Specified high-pressure compression fittings, a rupture-disc/relief path, and an inline filter to protect downstream gas handling from stray fines.",
      "Laid out the assembly for DFM: bolted flanges with O-ring grooves, clear service access, and minimal threaded holes into thin-walled pressure boundaries.",
    ],
    outcome: [
      "Achieved a smooth, non-pulsating feed of 25 µm powder into a 1 000 psi carrier gas stream.",
      "Held the target mass-flow tolerance across hopper-fill level and pressure transients.",
      "Delivered a clean BOM and fabrication package (vessel, flanges, auger, drive mount) suitable for in-house or supplier build.",
    ],
    specs: [
      { label: "Powder Size", value: "25 µm" },
      { label: "Working Pressure", value: "1 000 psi" },
      { label: "Wetted Material", value: "316L stainless steel" },
      { label: "Metering Method", value: "Precision auger screw" },
      { label: "Flow Conditioning", value: "Conical hopper + fluidization chamber" },
      { label: "Drive", value: "Variable-speed gear motor" },
      { label: "Sealing", value: "O-ring flanges + high-pressure compression fittings" },
      { label: "Tools", value: "SolidWorks · Hand calcs" },
    ],
    gallery: [
      { src: powderFeederFull, caption: "Section view — powder hopper column (left) and gearbox / motor column (right), tied together by the base plate." },
      { src: powderFeederHopper, caption: "Hopper column cutaway — pressure-rated housing over the conical hopper that drops powder through the metering disc." },
      { src: powderFeederGearbox, caption: "Gearbox column cutaway — motor and reduction stack housed in the pressure-rated right-hand column." },
      { src: powderFeederGearDetail, caption: "Metering plate detail — driven gear (green) with through-hole pattern and intermediate pinion (blue) transferring torque from the motor." },
    ],
  },
  {
    slug: "gosselin-platform",
    index: "03",
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
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
