import copperHeFinsCad from "@/assets/copper-he/01-fins-cad.png";
import copperHeFinPhoto from "@/assets/copper-he/02-fin-photo.png";
import copperHeLidSection from "@/assets/copper-he/03-lid-section.png";
import copperHeLidIso from "@/assets/copper-he/04-lid-iso.png";
import copperHeLidDetail from "@/assets/copper-he/05-lid-detail.png";
import copperHeFinalSetup from "@/assets/copper-he/06-final-setup.png";
import copperHeFinalTwo from "@/assets/copper-he/07-final-2.png";
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
    slug: "copper-gas-heater",
    index: "01",
    title: "Copper Gas Heater",
    subtitle: "18 kW modular gas heater for a cold spray system",
    role: "Mechanical Design & Thermal Analysis",
    year: "2025",
    summary:
      "Cold spray utilizes high speed gas to accelerate metal particles to critical velocities that allow for kinetic bonding at impact with metal substrates. The gas itself is typically accelerated using a converging-diverging nozzle, in which the exit velocity is proportional to the square root of the gas inlet temperature. Therefore one of the most important components in a cold spray system is the gas heater. This heater is responsible for heating up a high flow, high pressure stream of gas. The heater utilizes 18kW of 120V electricity, to bring air from 0°C to 440°C, at 1000 psi. The design of the heater was tightly constrained by cost and manufacturability, ultimately resulting in a modular design of stacked plates clamped together with threaded rods. The total cost was ~$3.5k per heater.",
    cover: copperHeFinsCad,
    tags: ["Heat Transfer", "Pressure Sealing", "Thermal Stress", "CFD", "DFM"],
    problem:
      "Cold spray utilizes high speed gas to accelerate metal particles to critical velocities that allow for kinetic bonding at impact with metal substrates. The gas itself is typically accelerated using a converging-diverging nozzle, in which the exit velocity is proportional to the square root of the gas inlet temperature. Therefore one of the most important components in a cold spray system is the gas heater. This heater is responsible for heating up a high flow, high pressure stream of gas. The heater utilizes 18kW of 120V electricity, to bring air from 0°C to 440°C, at 1000 psi. The design of the heater was tightly constrained by cost and manufacturability, ultimately resulting in a modular design of stacked plates clamped together with threaded rods. The total cost was ~$3.5k per heater.",
    approach: [
      "Fins: The fins pictured below are made of nickel plated copper. The copper ensures high conductivity, while the nickel plating protects from long term corrosion due to oxidation at high temperatures. The outer ring of holes are used in the final assembly for electric heat cartridges (6) and threaded rods (12 + 6 outside the disks due to nut spacing requirements). The groove is for seating the gasket, a spiral wound stainless steel gasket with a graphite filling. The internal slots operate as channels/fins for the gas to travel through. The slot width/sizing was limited on the economics of its manufacturability, and the spacing was iteratively optimized using ANSYS CFD & FEA.",
      "Lids: The lids replicate the bolt, cartridge and gasket spacing of the fins, while replacing the internal fins with a cone to channel the gas to/from the entry/exit points. This geometrical alteration therefore introduces much higher stresses of the disk and required a swap to stainless steel 304. The lower thermal conductivity of the SS304 introduced higher thermal stresses, characterized by the external cartridge heating and internal gas cooling. These were quantified through ANSYS CFD in order to properly validate the design. Manifolds were also introduced to the entry and exit points to help guide the flow of air, avoiding excess pressure losses.",
      "Hardware: All the hardware was selected to meet the temperature and pressure requirements of the heater. While this means selecting components that meet the strength requirements at high operating temperatures, this also presents various other challenges to design for. For example, with a total heater length of ~9.5\", the thermal expansion made rod pre-tensioning critical. The rod force must ensure proper gasket stress at low temperatures, while avoiding plastic deformation when fully stretched at maximum temperature.",
      "Sensors/controls: Heaters operated by setting a desired temperature in our open source printer control software (Klipper) and utilizing a PID loop driven by implanted thermistors. The thermistors were embedded in one copper plate on each of the heaters, adjacent to a cartridge. The PID then drove SSRs to control the input power.",
    ],
    outcome: [
      "The final setup consists of 4 heaters in series, resulting in a gas output temperature of ~440°C. The heaters have worked reliably in 250+ test cycles, without any degradation of performance.",
    ],
    specs: [
      { label: "Copper Round Bars", value: "24× ⌀6\" × 1\", nickel plated" },
      { label: "Stainless Steel Round Bars", value: "8× ⌀6\" × 1\"" },
      { label: "Steel Plates", value: "8× 8.5\" × 8.5\" × 0.5\"" },
      { label: "Threaded Rods", value: "72× 3/8\"-16 × 11\", ASTM Grade B16" },
      { label: "Nuts", value: "288× ASTM A194 Grade B7, double nutted" },
      { label: "Gaskets", value: "28× SS316 spiral wound, graphite filler" },
      { label: "Entry/Exit Fittings", value: "8× SS316, 1/2\" NPT to JIC" },
      { label: "Heat Cartridges", value: "24× 120V (12× 1000W, 12× 500W)" },
      { label: "SSRs", value: "8× 120V DC/AC (4× 40A, 4× 15A)" },
      { label: "Controller", value: "1× M8P Manta Control Board" },
    ],
    gallery: [
      { src: copperHeFinsCad, caption: "Nickel-plated copper fin — CAD view of the internal slot pattern, cartridge/rod holes, and gasket groove." },
      { src: copperHeFinPhoto, caption: "Manufactured fin — nickel-plated copper disk with machined flow channels." },
      { src: copperHeLidSection, caption: "Lid section — SS 304 cap plate with internal cone channeling gas to/from the entry/exit ports." },
      { src: copperHeLidIso, caption: "Lid isometric — bolt, cartridge, and gasket spacing mirrors the fin geometry." },
      { src: copperHeLidDetail, caption: "Lid detail — manifold integration at the gas entry/exit points to reduce pressure losses." },
      { src: copperHeFinalSetup, caption: "Final setup — four heaters plumbed in series to deliver ~440 °C gas output." },
      { src: copperHeFinalTwo, caption: "Heater stack in operation — threaded rods, gasketed fin/lid stack, and cartridge wiring." },
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
