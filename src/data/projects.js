export const projects = {
    game: {
        title: "Isometric Strategy Game",
        description:
            "A Java OpenGL strategy game and simulation.",
        status: "In Development",

        heroImage: "/assets/projects/game/main.webp",

        technologies: [
            "Java",
            "OpenGL",
            "GLSL"
        ],

        sections: [
            {
                title: "About",
                paragraphs: [
                    "This is a strategy and simulation game I have been developing in Java.",
                    "The game features procedural terrain, resource management, buildings, population simulation, and AI-controlled agents."
                ]
            },

            {
                title: "Procedural World",
                paragraphs: [
                    "The world is generated procedurally when a new game is created.",
                    "Terrain, resources, and other world features are generated using custom algorithms."
                ],
                image: "/assets/projects/game/terrain.webp"
            },

            {
                title: "AI",
                paragraphs: [
                    "The game contains AI agents that interact with the simulated world.",
                    "Agents can move around the map, gather resources, and interact with buildings."
                ],
                image: "/assets/projects/game/ai.webp"
            }
        ],

        gallery: [
            "/assets/projects/game/screenshot1.webp",
            "/assets/projects/game/screenshot2.webp",
            "/assets/projects/game/screenshot3.webp"
        ],

        github: "https://github.com/ouchakovpeter"
    }
};