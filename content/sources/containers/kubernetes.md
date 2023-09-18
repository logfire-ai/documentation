---
title: "Kubernetes"
metaTitle: "Kubernetes"
metaDescription: "Logfire logs sources kubernetes"
---
# Logfire Kubernetes Logging with Vector

Get started with logging on Kubernetes using Vector and send your logs to logfire. Start logging in just 2 minutes!

## Installation Methods

There are two primary methods to install Vector and set up Logfire:

- Kustomize
- Helm

In this guide, we will cover the Kustomize method.

## Kustomize

Certainly! Here's the documentation in Markdown format for the process of installing Vector on Kubernetes using `kubectl`:

# Installing Vector on Kubernetes using `kubectl`

`kubectl` is the Kubernetes command-line tool. While Helm is commonly used for package management in Kubernetes, `kubectl` can also be used to deploy applications and manage configurations. The following instructions will guide you through installing Vector in both the Agent and Aggregator roles using `kubectl`.

## Agent

The Vector Agent is a key component that allows you to collect data from your sources and then forward it to various destinations using sinks.

### 1. Define Vector’s Namespace

Running Vector in its dedicated namespace is recommended for isolation and management. In this guide, we will use `vector` as the namespace, but you can choose any appropriate name:

```bash
kubectl create namespace --dry-run=client -o yaml vector > namespace.yaml
```

### 2. Prepare your kustomization file

This kustomization configuration deploys Vector as an Agent. You can review the full default configuration [here](https://github.com/timberio/vector/blob/master/distribution/kubernetes/vector-agent/kustomization.yaml). For deeper insights into configurations, visit the [configuration](https://vector.dev/docs/reference/configuration/) docs page.

```bash
cat <<-'KUSTOMIZATION' > kustomization.yaml
---
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
namespace: vector
bases:
  - github.com/vectordotdev/vector/distribution/kubernetes/vector-agent
images:
  - name: timberio/vector
    newName: timberio/vector
    newTag: 0.31.0-distroless-libc
resources:
  - namespace.yaml
KUSTOMIZATION
```

### 3. Verify your kustomization file

Ensure that the kustomization configuration is correctly set up:

```bash
kubectl kustomize
```

### 4. Install Vector

Apply the configurations to deploy Vector:

```bash
kubectl apply -k .
```

### 5. Tail Vector logs

To check the logs of the Vector instance:

```bash
kubectl logs -n vector daemonset/vector
```

### 6. Update `kustomization.yaml`

Firstly, open your existing `kustomization.yaml` file for editing. You can use any text editor or command-line editor for this.

Append the following `configMapGenerator` block to your `kustomization.yaml`:

```yaml
configMapGenerator:
  - name: vector
    behavior: replace
    files:
      - vector-agent.toml
```

This will generate a new Kubernetes `ConfigMap` named `vector` from the `vector-agent.toml` file and replace any existing ConfigMap with the same name.

### 7. Download the New Vector Configuration

Run the following command to download your specific Vector configuration:

```bash
wget -O vector-agent.toml \
   https://api.logfire.ai/configuration/download/vector-toml/kubernetes/$SOURCE_TOKEN
```

> **Note**: Replace `$SOURCE_TOKEN` with your actual source token which can be found in your sources.

Ensure the `vector-agent.toml` file is in the same directory as your `kustomization.yaml` or provide the appropriate path in the `kustomization.yaml`.

## 6. Reload & Restart

To apply the changes and refresh Vector, execute:

```bash
kubectl apply -k .
kubectl rollout restart -n vector daemonset/vector
```

This command instructs Kubernetes to process the `kustomization.yaml` file, generate the required resources, and update the cluster accordingly. Since you've defined the behavior as `replace` in the `configMapGenerator`, it will replace the existing `ConfigMap` with the newly defined one.

After this step, Vector should pick up the new configuration. Ensure to monitor logs and the status of the Vector pods to confirm the successful application of the new configuration.


Check your logs in Logfire -> Live tail.

> **Warning**: Kubernetes version 1.15 or higher is required.

> **Info**: Kubelet certificate needs to be signed by the cluster Certificate Authority. If using Minikube, consider disabling certificate validation by modifying the metrics-server DaemonSet and `vector-agent.toml`.

---

Need help? Reach out at hello@logfire.ai . We're here to assist!

---

## Next Steps

Once you have completed the above steps, you can continue to set up Vector to gather logs and send them to logfire. Make sure to monitor the logs and ensure that the Vector setup is working seamlessly with logfire.

For more advanced setups or for using the Helm method, please refer to our detailed documentation or community forums.

```
