By: Rohan Phanse and Areeb Gani

Link to repository: [https://github.com/rohanphanse/CPSC474-Final](https://github.com/rohanphanse/CPSC474-Final)

## Demo

To run the short demo for a few minutes (a sample of matchups), run the following command:

```bash
# Install dependencies
pip install -r requirements.txt
# Run demo
make
./BlokusDemo
```

Full reproducibility instructions are at the bottom of the README.

## Blokus Duo

Blokus Duo is a combinatorial game i.e. finite, two-player, deterministic, perfect information, turn-based

- Each player begins with 21 pieces. 
- Each turn, place a piece on empty spots of the 14 x 14 grid. The piece must touch one of your previous pieces (by a corner, not an edge!) 
- If you cannot play any more pieces, you must pass.
- Once both have passed, the winner is the player whose remaining pieces have smaller total value.

Note that Blokus has very large state space (exceeding $10^{100}$).

## Research Question

Hw much does integrating DQN-learned Q-values into MCTS improve agent performance compared to using MCTS or DQN alone? Does this improvement depend on the quality of the training regimen of DQN and the rollout policy for MCTS (e.g., greedy vs. random)?

## Agents


We first ran simulations with a random agent, a greedy agent, and an MCTS agent. We parallelize MCTS by building and merging multiple trees, use a greedy agent for stronger simulations with faster convergence, and accelerate action generation by precomputing piece orientations and focusing on anchor points.

We then trained two different DQN agents, dubbed **DQN1** (trained against a greedy agent) and **DQN2** (trained against a random agent with reward shaping). Both were trained using an adaptation of ``blokus.py`` to a gym environment, shown in ```blokus_env.py``` (this treats the opponent, either greedy or random, as a fixed part of the environment). 

Finally, we integrated a MCTS+DQN hybrid agent that used the $Q$-values learned from DQN for the MCTS selection criteria. This final version uses the MCTS with greedy rollout, paired with DQN1. 

## Evaluation Results
<table>
  <thead>
    <tr>
      <th>Matchup</th>
      <th>Win Rate (Player 1)</th>
      <th>Win Rate (Player 2)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Greedy vs. Random</td>
      <td>94% (Greedy)</td>
      <td>6% (Random)</td>
    </tr>
    <tr>
      <td>DQN1 vs. Greedy</td>
      <td>15% (DQN1)</td>
      <td>85% (Greedy)</td>
    </tr>
    <tr>
      <td>DQN1 vs. Random</td>
      <td>65% (DQN1)</td>
      <td>35% (Random)</td>
    </tr>
    <tr>
      <td>DQN2 vs. Greedy</td>
      <td>6% (DQN2)</td>
      <td>94% (Greedy)</td>
    </tr>
    <tr>
      <td>DQN2 vs. Random</td>
      <td>41% (DQN2)</td>
      <td>59% (Random)</td>
    </tr>
    <tr>
      <td>MCTS (with random rollout) vs. Greedy</td>
      <td>59% (MCTS)</td>
      <td>41% (Greedy)</td>
    </tr>
    <tr>
      <td>MCTS (with greedy rollout) vs. Greedy</td>
      <td>80% (MCTS)</td>
      <td>20% (Greedy)</td>
    </tr>
    <tr>
      <td>MCTS+DQN vs. MCTS</td>
      <td>62% (MCTS+DQN)</td>
      <td>38% (MCTS)</td>
    </tr>
  </tbody>
</table>

Detailed evaluations can be found in the `/evals` folder for each matchup. These include the number of games run (which varies depending on the agent), point margin, etc.

## Observations

- The greedy agent is a very strong baseline, easily defeating random play and both DQN agents.
- MCTS agents, especially when simulations use the greedy policy, are much stronger than random and competitive with the greedy agent.
- Combining MCTS with DQN (MCTS+DQN) yields an improvement over vanilla MCTS, even if the DQN agents on their own are not as powerful.
- Due to the large state space and squishing of $Q$-values, the DQN agents took a long time to train and exhibited great stochasticity. In the future, smarter reward shaping, modifications to architecture/hyperparameters, and different training scheme (e.g. with the masking loss function) could aid performance when trained over longer periods of time.

## Directory Structure

<table>
  <thead>
    <tr>
      <th>File/Directory</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><code>README.md</code></td><td>Project overview, instructions, and results.</td></tr>
    <tr><td><code>blokus.py</code></td><td>Core Blokus Duo game logic and state representation.</td></tr>
    <tr><td><code>blokus_env.py</code></td><td>Gym-style environment wrapper for Blokus, used for DQN training.</td></tr>
    <tr><td><code>greedy.py</code></td><td>Implementation of the greedy agent.</td></tr>
    <tr><td><code>mcts.py</code></td><td>Monte Carlo Tree Search agent and evaluation scripts.</td></tr>
    <tr><td><code>dqn_agent.py</code></td><td>Deep Q-Network agent implementation.</td></tr>
    <tr><td><code>train_dqn.py</code></td><td>Script to train DQN1 (against greedy agent).</td></tr>
    <tr><td><code>train_dqn_random.py</code></td><td>Script to train DQN2 (against random agent with reward shaping).</td></tr>
    <tr><td><code>demo.py</code></td><td>Script to run a short demo of agent matchups.</td></tr>
    <tr><td><code>parse_results.py</code></td><td>Script to parse and analyze evaluation results, generate plots/statistics.</td></tr>
    <tr><td><code>agent_runs/</code></td><td>Folder containing raw results of agent matchups.</td></tr>
    <tr><td><code>evals/</code></td><td>Folder containing parsed results, plots, and metrics for each matchup.</td></tr>
    <tr><td><code>dqn_models/</code></td><td>Saved DQN model weights.</td></tr>
    <tr><td><code>dqn_reward_logs/</code></td><td>Reward logs from DQN training runs.</td></tr>
    <tr><td><code>dqn_training_plots/</code></td><td>Training plots from DQN training runs.</td></tr>
    <tr><td><code>test.sh</code></td><td>Shell script to run all agent matchups for full evaluation.</td></tr>
  </tbody>
</table>

## Reproducibility

Our complete results take hours to obtain, due to the branching factor of MCTS and training scheme of DQN. To reproduce our full results observed in ```mcts.py```, run

```bash
# Run full agent matchups
./test.sh
```

The **DQN1** model was trained using `python3 train_dqn.py`, and the **DQN2** model was trained using `python3 train_dqn_random.py`. Hyperparameters for the DQN architecture and training process are included in these files. All evals in the `/evals` folder were generated using `python3 parse_results.py --source [agent_runs/matchup]`. Information about the evaluation setup (i.e. number of games run) and more detailed statistics + plots of the results are included in `/evals`.
