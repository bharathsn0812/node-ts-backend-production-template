module.exports = {
    extends: ["@commitlint/cli", "@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                // Add a new feature or functionality to the project
                "feature",
                // Resolve a bug or issue in the code
                "fix",
                // Update or improve documentation (e.g., README, comments)
                "docs",
                // Make code style changes (e.g., formatting, indentation) without altering functionality
                "style",
                // Restructure code without changing its behavior or functionality
                "refactor",
                // Improve code performance or optimize functionality
                "perf",
                // Add, update, or fix tests in the project
                "test",
                // Update build scripts or dependencies (e.g., package.json changes)
                "build",
                // Make changes to the CI/CD configuration or pipelines
                "ci",
                // Perform minor maintenance tasks that don't affect functionality (e.g., update lint rules)
                "chore",
                // Revert a previous commit or set of changes
                "revert"
            ]
        ],
        "subject-case": [2, "always", "sentence-case"]
    }
}