# Simple Portfolio

A simple Portfolio to get the profit (annualized return) between two dates using the formula:

```
(1 + Return) ^ (1 / N) - 1
```

## How to test the code

This code run with Node 20.x. You can use the command

```
pnpm build && pnpm start
```

Or with Docker

```
sudo docker build -t simple-portfolio .
```

```
docker run simple-portfolio
```
