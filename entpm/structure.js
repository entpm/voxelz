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
			level: "vector"
		},
		"1": {
			name: "science",
			level: "minima"
		},
		"2": {
			name: "psychology",
			level: "maxima"
		},
		"3": {
			name: "philosophy",
			level: "minima"
		},
		"4": {
			name: "art",
			level: "maxima"
		}
	},

	levelTypes: {
		"vector": {
			index: 0
		},
		"minima": {
			index: 1
		},
		"maxima": {
			index: 2
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
			index: "^"
		},
		maxima: {
			index: "_"
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
			maxima: "virtual",
			minima: "actual",
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