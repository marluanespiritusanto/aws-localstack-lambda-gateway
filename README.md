# Setting up TypeScript project with LocalStack and remote debugging

> ⚠️ **Docker installation is assumed for these steps**

1. Install LocalStack dependencies

    ```sh
    brew install localstack/tap/localstack-cli
    brew install awscli-local
    ```

2. Set up environment: API Gateway + Lambda

    ```sh
    chmod +x setup.sh
    sh setup.sh
    ```

3. Copy the output endpoint

    ```sh
    curl -X POST PASTE_HERE_YOUR_OUTPUT_ENDPOINT
    ```

4. Run debugger on VS Code
