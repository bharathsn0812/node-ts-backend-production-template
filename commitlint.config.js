module.exports = {
	extends: ["@commitlint/cli", "@commitlint/config-conventional"],
	rules: {
		"type-enum" : [
			2,
			"always",
			[
				"feature",
				"fix",
				"docs",
				"style",
				"refactor",
				"performance",
				"test",
				"build",
				"ci",
				"chore",
				"revert"
			]
		],
		"subject-case": [2, "always", "sentence-case"]
	}
}