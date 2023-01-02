"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    "users-permissions": {
        config: {
            jwtSecret: env("JWT_SECRET"),
            jwt: {
                expiresIn: "30d",
            },
        },
    },
    upload: {
        config: {
            provider: "aws-s3",
            providerOptions: {
                accessKeyId: env("AWS_ACCESS_KEY_ID"),
                secretAccessKey: env("AWS_ACCESS_SECRET"),
                region: env("AWS_REGION"),
                params: {
                    Bucket: env("AWS_BUCKET_NAME"),
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    graphql: {
        config: {
            endpoint: "/graphql",
            shadowCRUD: true,
            playgroundAlways: true,
            depthLimit: 10,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
                introspection: true,
            },
        },
    },
});
