---
title: Rewards and Penalties
description: Description for OverProtocol's reward and penalty system
lang: en
---

The reward and penalty system serves as a mechanism to steer the blockchain network towards enhanced security. Rewards should be designed to encourage honest and diligent participants to continue contributing to the network. On the other hand, penalties should be crafted to deter or swiftly remove participants who might harm the network. However, care should be taken to ensure that excessively stringent penalties do not deter participation by creating psychological barriers.

Gasper's reward and penalty structure are delicately parameterized considering these factors. Validators, when given an opportunity to create a block, receive a relatively large reward. However, over extended periods of active validation, the rewards from participating in attestations in every epoch become more significant. In essence, the system rewards validators more as they remain diligently active. Conversely, penalties for not participating are balanced with potential rewards, ensuring that temporary downtimes, like short node outages, are not overly punitive.

However, direct threats to the consensus activate a stringent rule known as **slashing**, invoking strong penalties. Slashing comes into play in situations such as **1) when a proposer broadcasts conflicting blocks** or **2) when an attester makes contradictory votes or engages in double-voting.** Validators who witness these violations become whistleblowers, presenting evidence to the network. Violators face severe asset forfeiture and lose their validating rights.

### Introducing Bailout - Rescuing Offline Validators

In OverProtocol, this foundational reward and penalty structure is augmented with an **Bailout (rescuing offline validators)** mechanism. The rescue mechanism swiftly removes validators not maintaining adequate uptime from the consensus. Validators are rescued out of the network if their risk score surpasses a set threshold, which increases during prolonged downtime and decreases upon uptime. The system thereby monitors and rescues those who consistently fail to maintain adequate uptime.

There are two primary reasons for implementing this risk score:

#### Reason 1. Safeguarding the Validator's Balance

In any consensus-driven blockchain system, validators pledge a certain amount of assets as collateral. This ensures their vested interest in the proper functioning and security of the network. When validators are inactive or misbehave, they are penalized, causing a deduction from this pledged balance. Over time, if a validator remains inactive, these penalties can accumulate, significantly eroding their collateral.

The rescue mechanism acts as a protective measure in such scenarios. By detecting and ejecting consistently inactive validators, the system prevents their balance from being drained excessively. It's analogous to a safety net, ensuring that validators do not incur irreversible financial damage due to prolonged inactivity, which might sometimes be beyond their control, such as technical glitches or unforeseen disruptions.

Moreover, this mechanism protects not just the individual validators but also the overall network's financial incentives. If validators see their peers losing vast amounts of collateral due to extended downtimes, it could deter potential validators from joining or continuing in the network, fearing substantial losses.

#### Reason 2. Ensuring System Security and Optimal Performance

A blockchain network thrives on the active participation of its validators. They are responsible for proposing, verifying, and finalizing transactions or blocks in the chain. Inactive validators can slow down this process. Moreover, a significant number of inactive validators can make the network more susceptible to attacks and reduce its overall security.

The rescue mechanism identifies and removes these inactive participants, ensuring that only active, reliable validators contribute to the consensus process. By doing so, it keeps the network's performance optimized and maintains its security standards.

### How the Bailout Works

In essence, the rescue mechanism is both a protective and proactive feature, maintaining the financial health of validators and the operational integrity of the network. The risk score is designed to incentivize validators to maintain an uptime higher than 67%, assuming there are at least 16,384 validators in the network. At the network’s initial stage when there are fewer validators, the required uptime hurdle is set to 70%. As the number of validators increases, this hurdle gradually decreases to 67% uptime.

This design takes into account that a higher number of validators can inherently improve the system’s resilience from a statistical perspective, thereby allowing the validator uptime hurdle to be lowered. But, regardless of validator numbers in validator will face an increase in risk score during downtime and a decrease of the score during uptime.

#### About the Validator Risk Score

This part depicts the formula and illustration of the validator risk score. First, we define the following.

$N: \text{number of validators}$

$P: \text{validator uptime} (0 \leq P\leq 1)$

$\Delta{S_{max}} : \text{maximum risk score increment at one epoch} = 1$

$V_{min}: \text{minimum number of validators required} = 16384$.

Validator's risk score is added up by $a$ in downtime, and decreased by $b$ in uptime.

Then the expectation is $\text{risk score per epoch} = a(1-p)-bp = -(a+b)p +a$, and the x-intercept of this function would be $\frac{a}{a+b}$. We know that value $a$ is $\Delta{S_{max}}$, hence 1. So the x-intercept is $\frac{1}{1+b}$. We target the x-intercept to be the validator uptime threshold. That is, if we denote, $f$: the step function which indicates the required uptime depending on each validator (Illustrated in the figure below), $\frac{1}{1+b} = f$

<img src="/img/Fig-8.png" style={{width: 500}} alt="Required Validator Uptime" />

Then the relationship between the validator's uptime and risk score delta per epoch is shown in the following illustration and equation.

<img src="/img/Fig-9.png" style={{width: 500}} alt="Delta Risk Score per epoch" />

$$
\Delta\text{Risk Score per Epoch}= - \frac{\Delta S_{max}}{f}\cdot{P} + \Delta{S_{max}}
$$

When there are a small number of validators participating in the system, you are required to maintain a relatively high uptime. That is, given $N= V_{min}$, risk score increases when $P \leq 0.70$. The figure's blue-colored line has an x-intercept at $P=0.7$. As more validators participate in the system, the required uptime hurdle lowers. That is, when $N= inf$, risk score increases when $P \leq \frac{2}{3}$. The figure's orange-colored line has an x-intercept near $P=\frac{2}{3}$.
