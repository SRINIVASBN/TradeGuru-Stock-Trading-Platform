# TradeGuru — Stock Trading Platform

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18%2B-blue)](https://reactjs.org/)
[![Python](https://img.shields.io/badge/Python-3.8%2B-yellowgreen)](https://www.python.org/)
[![Docker](https://img.shields.io/badge/Docker-enabled-blue)](https://www.docker.com/)

An end-to-end stock trading platform that provides real-time market data, portfolio management, simulated (paper) order execution, backtesting, and optional ML-driven trading signals. TradeGuru is built for developers, algo traders, and educators who want a modular platform to prototype strategies and manage paper/live portfolios via a web UI and a REST/WebSocket API.

---

## Project Summary

| Section | Details |
|--------:|---------|
| Project Name | TradeGuru — Stock Trading Platform |
| Primary Components | Frontend (React), Backend API (Node.js / Express or Python FastAPI), Data Worker, Backtester |
| Input | Market data (live or historical), user orders, strategy parameters |
| Output | Executions (simulated/live), portfolio state, performance reports |
| Techniques Used | WebSockets, REST API, Backtesting engine, Optional ML |
| Modes | Live, Paper Trading, Backtest |
| Deployment | Docker | 
| Users | Traders, Algo Researchers, Developers |
| Sample Sharpe | 1.45 |
| Annual Return Example | 18.2% |
| Max Drawdown Example | 12.8% |

---

## Abstract

TradeGuru is a modular trading platform that combines a responsive web interface with a powerful backend for strategy execution and backtesting. It supports ingesting live market data, simulating orders, connecting to brokers, and running historical strategy evaluation. Optional ML-based support enables strategy signal generation and optimization.

---

## Results (Example Backtest)

| Metric | Value |
|-------:|------:|
| Annualized Return | 18.2% |
| Sharpe Ratio | 1.45 |
| Max Drawdown | 12.8% |
| Win Rate | 56% |
| CAGR | 17.9% |

Summary:
- Total Trades: 342  
- Wins: 192  
- Losses: 150  

---

## Features

- Real-time market data ingestion
- React dashboard UI
- REST API support
- WebSocket live price streaming
- Paper trading engine
- Broker-ready architecture (integrate APIs)
- Backtesting engine
- Strategy sandbox
- Optional ML signals support
- Docker support
- Auth support

---

## Quick Start

### 1️⃣ Clone repo
```bash
git clone https://github.com/SRINIVASBN/TradeGuru-Stock-Trading-Platform.git
cd TradeGuru-Stock-Trading-Platform
