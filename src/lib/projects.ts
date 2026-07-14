import copperHeFinsCad from "@/assets/copper-he/01-fins-cad.png";
import copperHeFinPhoto from "@/assets/copper-he/02-fin-photo.png";
import copperHeLidSection from "@/assets/copper-he/03-lid-section.png";
import copperHeLidIso from "@/assets/copper-he/04-lid-iso.png";
import copperHeLidDetail from "@/assets/copper-he/05-lid-detail.png";
import copperHeFinalSetup from "@/assets/copper-he/06-final-setup.png";
import copperHeFinalTwo from "@/assets/copper-he/07-final-2.png";
import feRadiatorCoreCut from "@/assets/formula-electric/core-cut.png";
import feRadiatorAssemblyFront from "@/assets/formula-electric/assembly-front.png";
import feRadiatorEndCap from "@/assets/formula-electric/end-cap-detail.png";
import feRadiatorAssemblyIso from "@/assets/formula-electric/assembly-iso.png";
import feRadiatorFanShroud from "@/assets/formula-electric/fan-shroud.png";
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

export type ProjectSection = {
  heading: string;
  body: string[];
  image?: { src: string; caption?: string };
};

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
  approachHeading?: string;
  sections?: ProjectSection[];
  status?: string;
  skills?: string[];
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
    slug: "powder-feeder",
    index: "02",
    title: "High-Pressure Powder Feeder",
    subtitle: "High-Pressure Powder Feeder for Cold Spray Deposition",
    role: "Mechanical Design",
    year: "2024",
    summary:
      "Cold spray requires introducing fine metal powder into the carrier gas at a steady, controllable rate. I designed and modeled a compact, high-pressure disk-metering powder feeder that delivers fine (~25 µm) copper powder into a ~1,000 psi carrier gas stream at a steady, controllable rate for cold spray deposition. The design combines a precision electromechanical metering drivetrain with a fully sealed pressure-vessel housing to minimize any irregularities in the flow of powder.",
    cover: powderFeederFull,
    tags: ["Powder Handling", "Pressure Vessel", "Cold Spray", "DFM"],
    problem:
      "In cold spray additive manufacturing, any variation in powder feed rate, such as a pulsing or inconsistent flow, directly affects deposition efficiency, precision and final material properties. Fine copper powder (~25 µm) easily clogs, resists flow and damages bearings and electronics. The feeder also has to introduce that powder into ~1,000 psi carrier gas, meaning the entire mechanism has to double as a sealed pressure vessel without disturbing the internal flow path that actually entrains the powder.",
    approach: [],
    approachHeading: "Design & Approach",
    sections: [
      {
        heading: "Disk Metering Mechanism",
        body: [
          "Powder sits in a hopper (two-piece cone, tube, and lid) and drops into small pockets machined into a rotating disk. As the disk turns, each pocket carries a fixed volume of powder from the hopper to the feeder outlet, making feed rate a direct function of disk speed. The powder is pulled out of the feeder outlet through a combination of gravity and venturi effect. The disk metering was chosen as the basis for the dispersion mechanism due to its combination of relatively low-cost, machining-simplicity and homogeneous-dispersion.",
        ],
        image: { src: powderFeederHopper },
      },
      {
        heading: "Integrated Gear-Disk Drive",
        body: [
          "A NEMA 23 stepper motor directly drives an inline planetary gearbox, with the output shaft driving the pinion gear (via key & set-screws). The metering disk itself has teeth machined into its edge, doubling as a spur gear driven directly by the pinion. This results in a ~40:1 total reduction from motor to disk, converting the motor's native step resolution into fine, repeatable angular control at low disk speeds. Such fine powders call for tight tolerances between the faces of the housing and the metering disk. Therefore when initially validating the mechanism/assembly, there is slight uncertainty in the magnitude of friction the drivetrain must overcome to spin the disk. Maximum motor/gearbox torque was designed to remain incapable of shearing gear teeth, ensuring the failure point in the drivetrain is motor stalling, avoiding needless damage/remachining of components.",
        ],
        image: { src: powderFeederGearbox },
      },
      {
        heading: "Pressure Vessel Design",
        body: [
          "The hopper, motor housing, and disk housing are all designed to structurally support and seal 1000 psi. The designs and hardware were validated to endure the induced stresses and maintain seal clamping force through a combination of hand calcs and ANSYS FEA. Every housing joint gets an individually sized O-ring (13 distinct sizes, 25 O-rings total across the assembly). The seals are especially important, as leaks at any interface could reduce or eliminate the venturi effect, or create enough back-pressure to overcome gravity feeding entirely. This results in powder feed rates that are either inconsistent or completely stalled. This led to decisions such as creating an enclosure to keep the motor inside the pressurized zone. Rather than seal a rotating shaft crossing through the pressure wall, the motor sits fully inside the sealed housing, using a hermetic electrical feedthrough for its 4 wires.",
        ],
        image: { src: powderFeederGearDetail },
      },
      {
        heading: "Manufacturability, Assembly & Serviceability",
        body: [
          "Components like the motor and bearings are selected to be resistant to fine dust/powder, but not fully rated dust proof components, to save on costs. The components are therefore also partially protected by various aspects of the design. For example, initial feeder pressurization does not utilize the powder outlet, but an inlet on top of the motor housing instead. This helps flush powder out of the housing, rather than pushing it in with the initial burst of gas. However, the components are still expected to wear faster than they would in a normal operating environment. Therefore there is heavy emphasis on serviceability, in which parts can be easily replaced and accessed through minimal disassembly.",
          "Powder is loaded through a high-pressure on/off ball valve in the hopper lid rather than by removing the lid itself. This is a small change that turns each refill into a quick open/close instead of unscrewing and re-torquing every lid bolt, while still ensuring a seal that is strong and reliable.",
        ],
      },
    ],
    status: "Design and structural validation are complete; the feeder is currently in fabrication.",
    skills: [
      "Detailed CAD modeling & assembly (Onshape)",
      "Hand calculations and FEA for structural design & analysis (ANSYS)",
      "Full CAM, CNC machining (MasterCAM, Haas VF-2SS)",
      "Component sourcing, BOM development, and multi-vendor procurement",
      "Full mechanical design for pressure vessels, precision metering mechanisms and fine-powder flow behavior",
    ],
    outcome: [],
    specs: [],
    gallery: [],
  },

  {
    slug: "copper-gas-heater",
    index: "03",
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
    slug: "formula-electric-cooling",
    index: "04",
    title: "Formula Electric Cooling System",
    subtitle: "Cooling system characterization and optimization for UBC Formula Electric",
    role: "Thermal Systems Lead",
    year: "2022",
    client: "UBC Formula Electric",
    summary:
      "Formula SAE is an international collegiate competition where student teams design and build a race car from the ground up. UBC Formula Electric designs a car to compete in the electric category. I took ownership of characterizing and optimizing the drivetrain's cooling system, responsible for keeping its two motors and two inverters within an efficient operating range.",
    cover: feRadiatorAssemblyIso,
    tags: ["Thermal Management", "Testing & Characterization", "DFM", "FSAE Rules"],
    problem:
      "The car's current cooling system is effective, but over-specced, with an off-the-shelf radiator considerably larger than needed. This ensures reliable cooling, but carries a real cost in weight, aerodynamic drag, and packaging flexibility. The underlying issue was that no one had measured the system's true thermal requirements, leading to hardware specified with large, conservative margins. My goal was to establish what the system genuinely required and redesign the hardware accordingly.",
    approach: [
      "Motor & Inverter Temperature vs Efficiency: The car is run on the dyno at a constant power output, with the radiator fan running at full capacity. Once the motor & inverter temperatures reach equilibrium, the temperature and input power is recorded and used to find overall system efficiency at that specific temperature. This process is then repeated with the fans operating at 75% and 50% capacity, to find two new efficiency/temperature data points. Extrapolating these data points allows for defining the boundaries of a temperature window with proper efficiency.",
      "Motor & Inverter Temperature vs Heat Dissipation: This test is run in parallel with the efficiency test, and utilizes the components' internal sensors together with thermocouples on the coolant lines. This measures the influx of heat introduced to the system by each component at various temperatures. Approximating a function for this relationship allows for the quantification of the total heat the system must dissipate.",
      "Radiator Heat Dissipation vs Fin Area: The radiator is mounted in a wind tunnel perpendicular to the flow of air, with water run through it at a high, constant temperature. The water temperature is measured at the radiator's inlet and outlet as portions of the frontal area are covered to alter surface area available for heat dissipation. This allows for the finalization of the radiator's frontal area sizing, in which governing heat-transfer equations are used to convert bench readings into accurate predictions for competition-day air temperature and pressure.",
      "A ribbon fin radiator core is reduced to size: A full-size automotive radiator core is cut down to the required frontal area, with all cuts kept parallel to the tubes so they stay welded to the same end plate, vastly reducing manufacturing complexity. This is a low-cost method of obtaining a complex fin pattern like the ribbon fin core.",
      "Carbon fibre end caps are layed: Carbon-fibre shells are laid in with an aluminium sheet-metal base and tube fittings to create a strong, light, watertight structure to connect core tubes. The sheet metal base extends out with tabs to mount to the chassis, avoiding additional brackets.",
      "Thermoformed fan shroud: A sheet-metal frame provides the shroud structure and holds the weight of the two fans. The thermoformed plastic cover ensures the airflow is properly channeled through the radiator.",
      "Every element was designed to follow relevant FSAE technical rules, including wheel-clearance keep-out zones, driver thermal protection, firewall requirements, direct-chassis mounting, and coolant sealing.",
    ],
    outcome: [
      "Defined the system's real operating window, heat load, and the minimum hardware needed to serve it.",
      "Produced a complete design and manufacturing plan for a downsized, rules-compliant radiator assembly.",
      "Trims weight and drag without compromising the system's ability to keep the motors and inverters in an efficient operating range.",
    ],
    specs: [
      { label: "Application", value: "UBC Formula Electric drivetrain" },
      { label: "Cooled Components", value: "2× motors + 2× inverters" },
      { label: "Core Type", value: "Ribbon fin automotive radiator core" },
      { label: "End Caps", value: "Carbon-fibre shells with aluminium sheet-metal base" },
      { label: "Shroud", value: "Sheet-metal frame + thermoformed plastic cover" },
      { label: "Test Equipment", value: "Dynamometer · Wind tunnel" },
      { label: "Compliance", value: "FSAE wheel-clearance, thermal protection, firewall, mounting, sealing" },
      { label: "Tools", value: "SolidWorks · Hand calcs" },
    ],
    gallery: [
      { src: feRadiatorCoreCut, caption: "Radiator core cut-down — full-size automotive ribbon-fin core reduced to the required frontal area, with cuts kept parallel to the tubes." },
      { src: feRadiatorAssemblyFront, caption: "Radiator assembly front view — reduced core with end caps and chassis mounting tabs." },
      { src: feRadiatorEndCap, caption: "End cap detail — carbon-fibre shell with aluminium sheet-metal base and tube fittings." },
      { src: feRadiatorAssemblyIso, caption: "Radiator assembly isometric — complete downsized radiator ready for packaging." },
      { src: feRadiatorFanShroud, caption: "Fan shroud — sheet-metal frame carrying two fans and a thermoformed plastic cover to channel airflow through the radiator." },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
