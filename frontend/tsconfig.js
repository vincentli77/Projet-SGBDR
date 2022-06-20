module.exports = {
    "compilerOptions": {
        "target": "ESNext",
        "useDefineForClassFields": true,
        "lib": [
            "DOM",
            "DOM.Iterable",
            "ESNext"
        ],
        "allowJs": false,
        "skipLibCheck": false,
        "esModuleInterop": false,
        "allowSyntheticDefaultImports": true,
        "forceConsistentCasingInFileNames": true,
        "module": "ESNext",
        "moduleResolution": "Node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react",
        "baseUrl": "./",
        "paths": {
            "@/*": [
                "./src/*"
            ],
            "@admin/*": [
                "./src/*"
            ],
            "@tenants/*": [
                "src-tenants/*"
            ],
            "@shared/*": [
                "./src-shared/*"
            ]
        },
        "strict": true,
        "types": [
            "vitest/globals"
        ]
    },
    "include": [
        "./src",
        "./src-tenants",
        "./src-shared",
        "./src-admin"
    ],
    "exclude": [
        "./scripts"
    ]
}