ENTPM.STRUCTURE = {
	substrates: [
		{
			name: "information",
			index: 1
		},
		{
			name: "content",
			index: 2
		},
		{
			name: "data",
			index: 3
		},
		{
			name: "experience",
			index: 4
		}
	],

	elementalTypes: {
		"0": {
			name: "living flow",
			level: "vector",
			repo: "knowledge",
			factor: "fractal",
			bias: "value",
			persona: "flipswitch",
			vnlft: "node deposit",
			interplay: "creative intelligence"
		},
		"1": {
			name: "settle",
			level: "minima",
			repo: "science",
			factor: "curiosity",
			bias: "informational",
			persona: "realist",
			vnlft: "technique",
			interplay: "creative productivity"
		},
		"2": {
			name: "departure",
			level: "maxima",
			repo: "psychology",
			factor: "care",
			bias: "emotional",
			persona: "visionary",
			vnlft: "variable",
			interplay: "operating system"
		},
		"3": {
			name: "travel",
			level: "minima",
			repo: "philosophy",
			factor: "guidance",
			bias: "destructive",
			persona: "critic",
			vnlft: "fluctuation",
			interplay: "fluid fractal holographic"
		},
		"4": {
			name: "arrival",
			level: "maxima",
			repo: "art",
			factor: "love",
			bias: "creative",
			persona: "artist",
			vnlft: "non-localised",
			interplay: "interface of restraint"
		}
	},

	levelTypes: {
		"vector": {
			name: "organism",
			state: "conscious",
			mode: "flows",
			amplitude: "ground",
			index: 0
		},
		"minima": {
			name: "information",
			state: "subconscious",
			mode: "creations",
			amplitude: "water",
			index: 1
		},
		"maxima": {
			name: "salience",
			state: "hyperconscious",
			mode: "archetypes",
			amplitude: "sky",
			index: 2
		}
	},

	compassTypes: {
		"string": {
			level: "vector",
			direction: "all",
			speed: "all",
			state: "all",
			mode: "all",
			elementals: "0"
		}
		"-8": {
			level: "maxima",
			direction: "north west",
			speed: "fast",
			state: "past",
			mode: "past",
			elementals: "4"
		},
		"+1": {
			level: "minima",
			direction: "north",
			speed: "slow",
			state: "past",
			mode: "becoming",
			elementals: "3"
		},
		"-7": {
			level: "maxima",
			direction: "north west",
			speed: "fast",
			state: "past",
			mode: "emerging",
			elementals: "2"
		},
		"+2": {
			level: "minima",
			direction: "east",
			speed: "slow",
			state: "present",
			mode: "being",
			elementals: "1"
		},
		"-6": {
			level: "maxima",
			direction: "south east",
			speed: "fast",
			state: "present",
			mode: "being",
			elementals: "1"
		},
		"+3": {
			level: "minima",
			direction: "south",
			speed: "slow",
			state: "future",
			mode: "emerging",
			elementals: "2"
		},
		"-5": {
			level: "maxima",
			direction: "south west",
			speed: "fast",
			state: "future",
			mode: "begoing",
			elementals: "3"
		},
		"+4": {
			level: "minima",
			direction: "west",
			speed: "slow",
			state: "future",
			mode: "future",
			elementals: "4"
		}
	},

	rippleTypes: {
		"wave": {
			level: "vector",
			topology1: "all",
			topology2: "all",
			emergence: "all"
		},
		"ripple1": {
			level: "minima",
			topology1: "-6",
			topology2: "+2",
			emergence: "inner"
		},
		"ripple2": {
			level: "maxima",
			topology1: "+3",
			topology2: "-7",
			emergence: "outer"
		},
		"ripple3": {
			level: "minima",
			topology1: "-5",
			topology2: "+1",
			emergence: "inner"
		},
		"ripple4": {
			level: "maxima",
			topology1: "+4",
			topology2: "-8",
			emergence: "outer"
		}
	},

	axisTypes: {
		"x": {
			name: "time",
			direction: "horizontal",
			affinity: "timelines",
			hyperparameter: "hyperphysics",
			entpm: "personas",
			code: "operations",
			coordinate: "resonance core",
			multiple: "frequency",
			intersection: "events",
			maxima_a: "effort",
			minima_a: "momentum",
			maxima_b: "reality",
			minima_b: "idea",
			decay: "present",
			activity_x: "seek",
			activity_y: "search",
			activity_z: "explore",

			//vector of forces
			narrative: "recognition",
			vof_x1_x: "balance",
			vof_x2_y: "conflict",
			survival: "persistence",
			growth: "sight"
		},
		"y": {
			name: "emotion",
			direction: "vertical",
			affinity: "actions",
			hyperparameter: "hyperneurology",
			entpm: "entanglement",
			code: "dynamics",
			coordinate: "nerve synapse",
			multiple: "neuron",
			intersection: "experiences",
			maxima_a: "emotion",
			minima_a: "passion",
			maxima_b: "failure",
			minima_b: "success",
			decay: "uncertainty",
			activity_x: "observe",
			activity_y: "spectate",
			activity_z: "curate",

			//vector of forces
			narrative: "purpose",
			vof_y1_x: "requirement",
			vof_y2_z: "occurrence",
			survival: "intention",
			growth: "unintention"
		},
		"z": {
			name: "projection",
			direction: "diagonal",
			affinity: "interfaces" "databases",
			hyperparameter: "hyperbiology",
			entpm: "metaconstructs",
			code: "utilisations",
			coordinate: "living cell",
			multiple: "cell",
			intersection: "perspectives",
			maxima_a: "force",
			minima_a: "expansion",
			maxima_b: "society+physciality",
			minima_b: "mind+us+progress",
			decay: "normalisation",
			activity_x: "focus",
			activity_y: "create",
			activity_z: "expand",

			//vector of forces
			narrative: "discovery",
			vof_z1_z: "participation",
			vof_z2_y: "fusion",
			survival: "delivery",
			growth: "possibility"
		}
	},

	vnlftTypes: {
		"variable": {
			elemental: "identifier",
			persona: "visionary",
			state: "emotional",
			mode: "care",
			frequency: "theta"
		},
		"non-localised": {
			elemental: "embodied",
			persona: "artist",
			state: "tranced",
			mode: "love",
			frequency: "delta"
		},
		"fluctuation": {
			elemental: "notifier",
			persona: "critic",
			state: "instinctual",
			mode: "guidance",
			frequency: "beta"
		},
		"technique": {
			elemental: "organism",
			persona: "realist",
			state: "sedated",
			mode: "curiosity",
			frequency: "alpha"
		}
	},

	processmechTypes: {
		"cycle1": {
			"c1.1a": "define",
			"c1.1b": "scope",
			"c1.2a": "reuse",
			"c1.2b": "scavenge",
			"c1.3a": "enhance",
			"c1.3b": "upgrade",
			"c1.4a": "merge",
			"c1.4b": "unite",
			"c1.5a": "release",
			"c1.5b": "survive",
			"c1.6a": "delete",
			"c1.6b": "detach"
		},
		"cycle2": {
			"c2.1a": "gather",
			"c2.1b": "group",
			"c2.2a": "order",
			"c2.2b": "prioritise",
			"c2.3a": "isolate",
			"c2.3b": "nurture",
			"c2.4a": "clean",
			"c2.4b": "recognise",
			"c2.5a": "squash",
			"c2.5b": "destroy",
			"c2.6a": "inspect",
			"c2.6b": "collate"
		}
	},

	elementals: {
		"information": {
			"0": "organism",
			"1": "composition",
			"2": "shape",
			"3": "communication",
			"4": "environment"
		},
		"content": {
			"0": "identifier",
			"1": "source",
			"2": "architecture",
			"3": "creation",
			"4": "dimension"
		},
		"data": {
			"0": "notifier",
			"1": "patterns",
			"2": "temperature",
			"3": "connections",
			"4": "hyperconscious"
		},
		"experience": {
			"0": "embodied",
			"1": "textural",
			"2": "flowing",
			"3": "profound",
			"4": "superficial"
		}
	},

	variableTypes: {
		minima: {
			index: "_"
		},
		maxima: {
			index: "^"
		},
		x: {
			index: "x"
		},
		y: {
			index: "y"
		},
		z: {
			index: "z"
		},
		a: {
			index: "*"
		},
		b: {
			index: "**"
		}
	},

	variables: {
	//  information substrate
		"organism": {
			maxima: "hybrid",
			minima: "cybernetic",
			x: "animal",
			y: "human",
			z: "robotic",
			a: "soft", // to shape
			b: "firm"  // to shape
		},
		"composition": {
			maxima: "synthetic",
			minima: "raw",
			x: "artificial",
			y: "natural",
			z: "processed",
			a: "ignored", // to communication
			b: "enhanced" // to communication
		},
		"shape": {
			maxima: "loose",
			minima: "dense",
			x: "blobs",
			y: "nets",
			z: "spikes",
			a: "micro", // to environment
			b: "macro"  // to environment
		},
		"communication": {
			maxima: "precise",
			minima: "abstract",
			x: "numbers",
			y: "words",
			z: "forms",
			a: "complex", // to organism
			b: "simple"   // to organism
		},
		"environment": {
			maxima: "dream",
			minima: "reality",
			x: "earth",
			y: "space",
			z: "mind",
			a: "illusory", // to composition
			b: "real"      // to composition
		},
	//  content substrate
		"identifier": {
			maxima: "cause",
			minima: "ego",
			x: "collective",
			y: "individual",
			z: "output",
			a: "altruistic", // to architecture
			b: "self aware"  // to architecture
		},
		"source": {
			maxima: "culture",
			minima: "imagination",
			x: "literature",
			y: "art",
			z: "games",
			a: "amplified", // to creation
			b: "utilised"   // to creation
		},
		"architecture": {
			maxima: "informational",
			minima: "experiential",
			x: "distributed",
			y: "consolidated",
			z: "biological",
			a: "complex", // to dimension
			b: "simple"   // to dimension
		},
		"creation": {
			maxima: "implementation",
			minima: "idea",
			x: "work",
			y: "play",
			z: "life",
			a: "fun",      // to identifier
			b: "emotional" // to identifier
		},
		"dimension": {
			maxima: "actual",
			minima: "virtual",
			x: "physicality",
			y: "technology",
			z: "mind",
			a: "sensed",  // to source
			b: "embodied" // to source
		},
	//  data substrate
		"notifier": {
			maxima: "on",
			minima: "off",
			x: "meaning",
			y: "language",
			z: "context",
			a: "understood",   // to temperature
			b: "misunderstood" // to temperature
		},
		"patterns": {
			maxima: "phases",
			minima: "cycles",
			x: "choice",
			y: "chance",
			z: "result",
			a: "error",     // to connections
			b: "correction" // to connections
		},
		"temperature": {
			maxima: "cold",
			minima: "hot",
			x: "order",
			y: "chaos",
			z: "uncertainty",
			a: "witnessed", // to hyperconscious
			b: "neglected"  // to hyperconscious
		},
		"connections": {
			maxima: "macro",
			minima: "micro",
			x: "modes",
			y: "positions",
			z: "statistics",
			a: "stated",  // to notifier
			b: "remarked" // to notifier
		},
		"hyperconscious": {
			maxima: "subconscious",
			minima: "conscious",
			x: "non-presence",
			y: "presence",
			z: "emergence",
			a: "thought",   // to patterns
			b: "remembered" // to patterns
		},
	//  experience substrate
		"embodied": {
			maxima: "empty",
			minima: "full",
			x: "amplification",
			y: "tolerance",
			z: "decayed",
			a: "controlled", // to flowing
			b: "embraced"    // to flowing
		},
		"textural": {
			maxima: "coarse",
			minima: "smooth",
			x: "dreamed",
			y: "lived",
			z: "remembered",
			a: "encouraged", // to profound
			b: "distorted"   // to profound
		},
		"flowing": {
			maxima: "paced",
			minima: "delayed",
			x: "mystery",
			y: "discovered",
			z: "struggle",
			a: "managed", // to superficial
			b: "freed"    // to superficial
		},
		"profound": {
			maxima: "wide",
			minima: "deep",
			x: "emotion",
			y: "aesthetics",
			z: "sensation",
			a: "satisfied", // to embodied
			b: "insatiable" // to embodied
		},
		"superficial": {
			maxima: "narrow",
			minima: "high",
			x: "transformed",
			y: "delivered",
			z: "alluded",
			a: "instigated", // to textural
			b: "projected"   // to textural
		}
	}
};