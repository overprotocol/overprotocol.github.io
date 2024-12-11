---
title: Deposit and Yield
description: Description of the role and significance of this deposit and yield in a PoS blockchain, focusing on OverProtocol's system design.
lang: en
---

OverProtocol employs a proof-of-stake mechanism, requiring validators to **deposit** OVER tokens to participate in the network's block creation process. The **yield** is the key to attracting the deposit, and is the reward given to the validators. Let's delve into the role and significance of this deposit and yield in a PoS blockchain, focusing on OverProtocol's system design.

## Deposit

The deposit in OverProtocol serves as an economic safeguard, deterring actions that could undermine the blockchain's integrity. To gain significant control over the chain, an attacker would need to acquire more than two-thirds of the total deposited tokens. Additionally, owning a third or more of these tokens could disrupt the consensus algorithm's finalization process. Therefore, the network's economic security is strengthened by increasing both the number of participants and the volume of deposited tokens.

While a higher token deposit undoubtedly enhances the chain's safety, the utility of OVER tokens goes beyond security. These tokens play a crucial role in the network, including paying network fees, acting as intermediaries in exchanges, and supporting liquidity in the OverProtocol's economic activities. Consequently, an excessively high deposit requirement could impede the ecosystem's growth and dynamism by limiting the availability of tokens for these essential functions.

Therefore, it is crucial to maintain an optimal deposit amount for the OverProtocol. This balance ensures that the deposit is not so low as to compromise the network's security, nor so high as to diminish the monetary value and utility of the OVER token. Striking this balance is key to preserving both the integrity of the blockchain and the dynamic functionality of the token within the ecosystem.

### Target Deposit Ratio

<!-- The target deposit ratio is defined as the desired proportion of staked OVER tokens relative to the total circulating supply, as illustrated in Figure ![Target Deposit Ratio](/static/img/target_deposit_ratio.png). -->

The target deposit ratio is defined as the desired proportion of staked OVER tokens relative to the total circulating supply, as illustrated in the figure below:

<img src="/img/target_deposit_ratio.png" style={{width: 500}} alt="Target Deposit Ratio" />

Initially, the OverProtocol sets a high target deposit ratio. This approach is adopted because, at the outset, the mainnet token often has a low market price, undermining its ability to secure the chain. A higher target deposit ratio compensates for this low value, ensuring adequate security.

However, reducing the deposit ratio can also be beneficial. The tokens not staked are crucial for on-chain activities, enhancing the monetary value of the OVER token. Therefore, once the deposit level is sufficient to assure security, it is advantageous to lower the target deposit ratio.

As the chain matures and expands its utility, gaining monetary value, a lower target deposit ratio becomes adequate for maintaining security. This gradual adjustment in the target deposit ratio is strategic, aiming to strike a harmonious balance between encouraging broad participation and efficiently managing the network's operational demands.

<!-- \begin{figure}[H]
    \centering
    \includegraphics[width=0.6\textwidth]{target deposit ratio.png}
    \caption{Target deposit ratio}
    \label{fig:target deposit ratio}
\end{figure} -->

### Target Deposit Amount

The target deposit amount represents the target aggregate quantity of OVER tokens staked within the system, as depicted in the picture below:

<img src="/img/target_deposit.png" style={{width: 500}} alt="Target Deposit " />

This figure is crucial as it indicates the volume of tokens committed to securing the Proof of Stake (PoS) system. Therefore, setting an appropriate target deposit amount is a key strategic decision.

In the early stages, to align with the high target deposit ratio, it is essential to rapidly increase the total amount of tokens staked in the system. As the system evolves and stabilizes, the necessity to accumulate large new deposits diminishes. Eventually, a saturation point is reached where the accumulated deposits are sufficient to ensure system security. Following this, similar to the rationale behind reducing the target deposit ratio, the target deposit amount is capped. This cap, the max target deposit, is implemented to enhance the monetary utility of the non-staked OVER tokens, thereby supporting broader economic activities within the ecosystem.

## Yield

**Yield** is the interest rate that measures the proportion of newly issued staking rewards given to the stakers in comparison to their original stake. Validators, responsible for executing assigned duties, earn these rewards. When the reward is minimal, approaching zero, it discourages contributions to the network, while a higher reward increases participation demand. This concept of yield plays a crucial role in maintaining a specific deposit ratio.

### Base Yield

OverProtocol establishes a predetermined **base yield** as the foundational yield rate for staking. This base yield, applied to the maximum target deposit amount, determines the total allocation of OVER tokens as rewards for each epoch, thus forming the **reward pool**. In this system, the reward pool amount remains constant for each epoch, regardless of the time period. Consequently, the actual yield for each deposit is influenced by the total amount of stake deposits.

In the early stages, when a smaller amount of deposits shares the fixed reward pool, the reward distributed per token deposit is high, leading to a higher yield. However, as the total deposit volume increases, the yield per deposit decreases proportionately. Ultimately, when the deposit amount reaches the maximum target, the yield stabilizes, aligning with the predetermined base yield level.

## The Feedback Mechanism

The base yield and the reward pool establish the foundational yield for validators at each specific moment within our protocol. However, the yield is dynamically adjusted from this baseline to assist the system in reaching the target deposit amount. If the actual deposit is below the target, the yield is increased; conversely, if it exceeds the target, the yield is decreased. This crucial adjustment process is known as the **feedback mechanism**.

### The Need for Feedback Mechanism

The feedback mechanism is essential in managing fluctuations in yield demand, particularly when actual deposit deviates from our target deposit assumptions. For example, consider a scenario where the actual demand for yields is lower than expected, resulting in a deposit ratio below our projections, as depicted in the picture below. The converse situation is also plausible :

<img src="/img/discrepancy.png" style={{width: 500}} alt="Discrepancy" />

<!--
\begin{figure}[H]
\centering
\includegraphics[width=0.6\textwidth]{discrepancy.png}
\caption{Discrepancy between the target and actual outcomes}
\label{fig:discrepancy}
\end{figure} -->

Such discrepancies arise from changes in yield demand. A notable instance occurs when the US Federal Reserve raises interest rates, increasing the opportunity cost of staking in OverProtocol. Under these circumstances, the same capital might yield higher returns in alternative financial instruments. Therefore, even if OverProtocol maintains a consistent yield level, validators might prefer investing in other assets, leading to a decrease in deposits within OverProtocol. This situation illustrates how actual yield demand can diverge from our initial assumptions.

Irrespective of external factors, maintaining a specific deposit ratio is crucial for the security of OverProtocol. To ensure this, we have implemented a feedback mechanism that dynamically adjusts our yields. Modifying the yield either upwards or downwards serves as an incentive or disincentive for participation, thereby influencing deposit levels.

### Feedback Mechanism

The feedback mechanism functions by assessing the discrepancy between the target and actual deposit ratios, subsequently fine-tuning the yields. The $\textit{Validator Pending Queue}$ comprises validators attempting to enter the system, while the $\textit{Validator Exit Queue}$ includes those trying to exit. The net demand difference, derived from the size disparity between these two queues, indicates the overall interest in becoming an OVER validator. By adding the original number of validators for the current epoch, we can calculate the number of validators for the next epoch as follows:

$$
\begin{align}
\text{Validator}_{\text{next}} = \text{Validator}_{\text{current}} + \text{Pending Queue}_{\text{size}} - \text{Exit Queue}_{\text{size}}
\end{align}
$$

If the total deposit amount, inferred from $\text{Validator}_{\text{next}}$, exceeds the target deposit amount for that timeframe, the yield decreases, and vice versa. To safeguard against attacks and prevent excessively high or low yield levels, we propose implementing upper and lower yield bounds. Additionally, the speed of feedback adjustment is a critical aspect. Denoting the feedback adjustment as $f(t)$, its speed is defined as:

$$
\begin{align}
\frac{df(t)}{dt} = k \cdot \text{Maturity Factor} \cdot \text{Scaling Factor}
\end{align}
$$

The $\textit{Maturity Factor}$ is introduced to steer the system towards a more stable and mature state. The system evaluates the current deposit level against the maximum target deposit amount, increasing the rate of feedback change proportionally to the discrepancy. In essence, the farther the system is from the maximum target, the faster the adjustments occur. The $\textit{Scaling Factor}$ enables the system to rapidly align with the target, where a larger discrepancy between the actual and target deposit amounts accelerates the feedback change rate.

To implement such a feedback mechanism, the system requires two key components: the $\textit{Adaptive Validator Churn Limit}$ and $\textit{The Issuance Reserve}$. The explanation follows.

### The Issuance Reserve

The primary function of the issuance reserve is to manage the allocation of additional rewards when needed. Specifically, the reserve is pre-allocated 100 million OVER and serves as a resource for the feedback system to augment rewards when necessary. If the system determines that more rewards should be distributed, the additional amount is provided from this reserve. However, no more than this pre-allocated amount will be issued. The management of the issuance reserve is handled at the protocol level, protecting it from risks such as account hacking and ensuring its use is strictly limited to the dynamic adjustment of yields.
