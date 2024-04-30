---
title: Staking Rewards
description: A description of staking rewards, from year 1.
lang: en
---

## Issuance Budget Upto Year 10

A distribution of $40\%$ of the FDV, 400 Million OVER, will be undertaken across a 10-year schedule. The issuance plan for up to the 10th year is encapsulated in the table below. This is an issuance plan established based on detailed modeling, which gradually increases and then decreases each year, considering the target validator number. The explanation for the target validator number continues in [Deposit and Yield](feedback.md).

| Year    | Issuance | Issuance in OVER |
| ------- | -------- | ---------------- |
| Year 1  | 2.0%     | 20M OVER         |
| Year 2  | 5.5%     | 55M OVER         |
| Year 3  | 7.5%     | 75M OVER         |
| Year 4  | 6.5%     | 65M OVER         |
| Year 5  | 5.0%     | 50M OVER         |
| Year 6  | 4.0%     | 40M OVER         |
| Year 7  | 3.0%     | 30M OVER         |
| Year 8  | 2.5%     | 25M OVER         |
| Year 9  | 2.3%     | 23M OVER         |
| Year 10 | 1.7%     | 17M OVER         |

## Issuance Budget from From Year 11

The issuance budget commencing from the 11th year is summarized in the table below. Any newly issued amount from 11th year is targeted to be neutralized through Gas fee burns, and such design is aimed to maintain the total supply of 1 Billion OVER.

| Year     | Issuance | Issuance in OVER |
| -------- | -------- | ---------------- |
| Year 11~ | 1.5%     | 15M OVER         |

## The Actual Issuance

The **Issuance budget** presents the Staking Reward release schedule in **Nominal Terms.** The **Actual release** of staking rewards is adjusted by the protocol's predefined [feedback mechanism](feedback.md/#the-feedback-mechanism).

This mechanism acts as a reserve system to modulate the issuance levels: it reduces actual issuance when sufficient staking rewards are available, and increases issuance when more rewards are needed by the protocol. Decisions regarding these adjustments are made based on the current staking rate.

Essentially, the system temporarily stores some of the nominal staking rewards in a separate reserve when additional issuance is not required, and utilizes these reserves when increased issuance is necessary.

Importantly, this reserve is **NOT** managed by any external entities but is instead governed by an endogenous feedback mechanism within the blockchain. Additionally, throughout the first 10 years, the sum of the **Accumulated Reserve** and the **Accumulated Actual Staking Rewards** will always equal the **Accumulated Nominal Staking Rewards.**

Refer to the [deposit and yield](feedback.md) page to understand the whole background of the feedback mechanism.
