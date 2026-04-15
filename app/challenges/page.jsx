'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { viet } from '../fonts';

const INITIAL_COLORS = {
  A: "#E8A838", B: "#3B6B3B", C: "#D94040", D: "#8B5E3C", E: "#B8A070",
  F: "#5C4033", G: "#6B7B3A", H: "#3A6B6B", I: "#5DADE2", J: "#7D3C98",
  K: "#6B6B3A", L: "#5C4033", M: "#C0392B", N: "#27AE60", O: "#2C3E50",
  P: "#8E44AD", Q: "#7F8C8D", R: "#6B4226", S: "#D4AC0D", T: "#E74C8F",
  U: "#1ABC9C", V: "#E67E22", W: "#2ECC71", X: "#95A5A6", Y: "#F1C40F",
  Z: "#E59866",
};

function Avatar({ username, avatarUrl, size = 44 }) {
  const initial = username.charAt(0).toUpperCase();
  const bgColor = INITIAL_COLORS[initial] || "#7F8C8D";

  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={username}
        width={size}
        height={size}
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-bold"
      style={{ width: size, height: size, backgroundColor: bgColor, fontSize: size * 0.42 }}
    >
      {initial}
    </div>
  );
}

function ProjectCard({ project }) {
  const { members, description, repoUrl } = project;

  return (
    <motion.div
      className="flex flex-col gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {members.map((member, idx) => (
            <div
              key={member.username}
              className="relative rounded-full border-2 border-[#FDF6EC]"
              style={{ marginLeft: idx > 0 ? -12 : 0, zIndex: members.length - idx }}
            >
              <Avatar username={member.username} avatarUrl={member.avatarUrl} size={44} />
            </div>
          ))}
        </div>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#E8A838] rounded-full border border-transparent hover:border-[#E8A838] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="flex-shrink-0">
            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          View Project
        </a>
      </div>
      <div className="flex items-center gap-1 text-sm font-semibold text-[#1a1a1a]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        {members.map((m) => m.username).join(", ")}
      </div>
      <p className="text-sm text-[#1a1a1a] leading-relaxed">{description}</p>
    </motion.div>
  );
}

const projects = [
  { id: "1", members: [{ username: "panon-btc", avatarUrl: "https://avatars.githubusercontent.com/panon-btc" }], description: "Cory: A local-first bitcoin transaction ancestry explorer and BIP-329 label editor. Cory helps you inspect where a Bitcoin transaction's funds came from, interactively, on your own machine.", repoUrl: "https://github.com/panon-btc/cory" },
  { id: "2", members: [{ username: "aizuanjeme", avatarUrl: "https://avatars.githubusercontent.com/aizuanjeme" }], description: "Bitcoin transaction history explorer with visual graph tracing, wallet fingerprint detection, and BIP-329 label management.", repoUrl: "https://github.com/aizuanjeme/know-your-coin-history" },
  { id: "3", members: [{ username: "razorbest", avatarUrl: "https://avatars.githubusercontent.com/RazorBest" }], description: "Traffic analysis of post-BIP324 P2P Bitcoin traffic. Designed to figure out if P2P Bitcoin encrypted traffic is detectable by ISPs.", repoUrl: "https://github.com/RazorBest/bip324-traffic-analysis" },
  { id: "4", members: [{ username: "Arowolokehinde", avatarUrl: "https://avatars.githubusercontent.com/Arowolokehinde" }], description: "Research project around Bitcoin's encrypted P2P protocol (BIP-324). This report investigates whether a passive network adversary — such as an Internet Service Provider (ISP) or a BGP-hijacking attacker positioned on the network path — can determine the timing of specific Bitcoin P2P protocol events from encrypted traffic metadata alone.", repoUrl: "https://github.com/Arowolokehinde/bip324-traffic-analysis-research" },
  { id: "5", members: [{ username: "Hamza1610", avatarUrl: "https://avatars.githubusercontent.com/Hamza1610" }], description: "Interactive visual tool that lets users create and observe real blockchain forks/reorgs on test networks.", repoUrl: "https://github.com/Hamza1610/bitcoin_block_weave" },
  { id: "6", members: [{ username: "harismuzaffer", avatarUrl: "https://avatars.githubusercontent.com/harismuzaffer" }, { username: "SIDHARTH20K4", avatarUrl: "https://avatars.githubusercontent.com/SIDHARTH20K4" }], description: "Contributions to ddust, a new tool by bubb1es71 that finds and safely removes dust attack UTXOs from a wallet. ddust creates small, low-fee, stand-alone transactions that spend dust UTXOs to an OP_RETURN output, preventing dust from accidentally being spent with other wallet UTXOs.", repoUrl: "https://github.com/bubb1es71/ddust" },
  { id: "7", members: [{ username: "8144225309", avatarUrl: "https://avatars.githubusercontent.com/8144225309" }], description: "The first implementation of SuperScalar, a new kind of lightning channel factory that can more easily scale LN and provide cooperative LSP services with no bitcoin softfork needed.", repoUrl: "https://github.com/8144225309/SuperScalar" },
  { id: "8", members: [{ username: "TechLateef", avatarUrl: "https://avatars.githubusercontent.com/TechLateef" }], description: "PSBTv2 + BIP375 implementation in Golang.", repoUrl: "https://github.com/TechLateef/psbt" },
  { id: "9", members: [{ username: "Ugarba202", avatarUrl: "https://avatars.githubusercontent.com/Ugarba202" }], description: "Rust library and CLI tool that analyzes a bitcoin wallet's UTXO set and evaluates whether the wallet is safe for operating a Lightning node. This tool acts as a Lightning wallet diagnostics engine and performs several analyses like wallet liquidity analysis, channel funding strategy recommendations, and UTXO fragmentation detection.", repoUrl: "https://github.com/Ugarba202/Lightning-UTXO-Anchor-Manager" },
  { id: "10", members: [{ username: "noahjoeris", avatarUrl: "https://avatars.githubusercontent.com/noahjoeris" }], description: "Tool for exploring forks, tip divergence, and reorg behavior across multiple node backends.", repoUrl: "https://github.com/noahjoeris/reorg-playground" },
  { id: "11", members: [{ username: "iamthesvn", avatarUrl: "https://avatars.githubusercontent.com/iamthesvn" }], description: "A transaction anchor fee-bumping service, payable via Lightning Network.", repoUrl: "https://github.com/iamthesvn/feebumper" },
  { id: "12", members: [{ username: "SusanGithaigaN", avatarUrl: "https://avatars.githubusercontent.com/SusanGithaigaN" }], description: "Fee bumping service that helps Lightning users get stuck commitment transactions confirmed. Uses anchor outputs and CPFP.", repoUrl: "https://github.com/SusanGithaigaN/lightning-anchor-fee-outputs" },
  { id: "13", members: [{ username: "UfiairENE", avatarUrl: "https://avatars.githubusercontent.com/UfiairENE" }, { username: "vivcis", avatarUrl: "https://avatars.githubusercontent.com/vivcis" }], description: "CLI tool that identifies dust attack UTXOs and safely removes them before they can be used to deanonymize you.", repoUrl: "https://github.com/UfiairENE/bitcoin-utxo-observatory" },
  { id: "14", members: [{ username: "nkatha23", avatarUrl: "https://avatars.githubusercontent.com/nkatha23" }], description: "Know Your Coin History: Transaction graph explorer that lets you trace where your coins came from. Load a transaction or UTXO, recursively trace its ancestry, attach labels, detect wallet fingerprinting heuristics, and export everything in the BIP-329 wallet label standard — all against your own local Bitcoin Core node or Electrum server.", repoUrl: "https://github.com/nkatha23/knowyourcoinhistory" },
  { id: "15", members: [{ username: "diegobianqui", avatarUrl: "https://avatars.githubusercontent.com/diegobianqui" }, { username: "ToRyVand", avatarUrl: "https://avatars.githubusercontent.com/ToRyVand" }, { username: "0xbrito", avatarUrl: "https://avatars.githubusercontent.com/0xbrito" }, { username: "Nacho" }], description: "A passive observability platform for the Lightning Network gossip layer. Ingests raw BOLT 7 gossip snapshots and produces an interactive intelligence dashboard for analyzing message propagation, peer behavior, and network-level privacy exposure. Built on top of jharveyb's gossip_observer. Finalist and honorable mention at BTC++ Exploits Edition hackathon (February 2026).", repoUrl: "https://github.com/bitcoin-visuals/LN_gossip_observer_visuals" },
  { id: "16", members: [{ username: "Miracle656", avatarUrl: "https://avatars.githubusercontent.com/Miracle656" }], description: "Real-time, interactive tool for visualizing and modeling blockchain forks and reorganizations on a local bitcoin Regtest network.", repoUrl: "https://github.com/Miracle656/Visual-Fork-Creator-Bitcoin-Regtest-" },
  { id: "17", members: [{ username: "ValeraFinebits", avatarUrl: "https://avatars.githubusercontent.com/ValeraFinebits" }], description: "Async Payjoin (BIP-77) plugin for BTCPayServer", repoUrl: "https://github.com/ValeraFinebits/btcpayserver-payjoin-plugin" },
  { id: "18", members: [{ username: "GuiSchet", avatarUrl: "https://avatars.githubusercontent.com/GuiSchet" }], description: "A peer-observer tool that subscribes to NATS events and emits alerts to stdout when anomalous peer behavior is detected.", repoUrl: "https://github.com/GuiSchet/peer-observer/tree/alerts-tool/tools/alerts" },
  { id: "19", members: [{ username: "GuiSchet", avatarUrl: "https://avatars.githubusercontent.com/GuiSchet" }, { username: "f3r10" }], description: "Real-time dashboard for analyzing and monitoring a Bitcoin Core node's P2P network activity. It combines beautiful, responsive visual components with an integrated AI assistant to help users understand what is happening under the hood of a bitcoin node. Third place winner for the BTC++ Exploits Edition hackathon (February 2026)", repoUrl: "https://github.com/GUiSchet/c12d" },
  { id: "20", members: [{ username: "vittoridavide", avatarUrl: "https://avatars.githubusercontent.com/vittoridavide" }], description: "Provenance: Local-first analysis tool for people and businesses that need to trace the history of coins through their transaction ancestry. Supports classifying and labeling UTXOs or transactions, and allows BIP-329 and CSV exports.", repoUrl: "https://github.com/vittoridavide/provenance-btc" },
  { id: "21", members: [{ username: "charlesoma", avatarUrl: "https://avatars.githubusercontent.com/charlesoma" }], description: "CLI tool for detecting and cleaning dust UTXOs using PSBT workflows.", repoUrl: "https://github.com/charlesoma/dustcleaner" },
  { id: "22", members: [{ username: "1estart", avatarUrl: "https://avatars.githubusercontent.com/1estart" }], description: "Dust Sweeper: Scans a wallet for dust UTXOs and creates a PSBT to consolidate or burn them. Guides the user through review, signing with a BDK wallet, verification, and broadcast.", repoUrl: "https://github.com/1estart/dust_sweeper" },
  { id: "23", members: [{ username: "Smartcoder05", avatarUrl: "https://avatars.githubusercontent.com/Smartcoder05" }], description: "Composable Rust library for parsing, building, and resolving Bitcoin payment URIs (BIP-321). Supports silent payments, payjoin, and lightning.", repoUrl: "https://github.com/Smartcoder05/BIP321-Suite" },
  { id: "24", members: [{ username: "Jesusbrito04", avatarUrl: "https://avatars.githubusercontent.com/Jesusbrito04" }], description: "BIP-321 (Bitcoin URI) parser written in Rust. Designed to be the backbone of modern wallets that need to support not just simple on-chain payments, but also payjoin, silent payments, lightning, and beyond.", repoUrl: "https://github.com/Jesusbrito04/bitcoin-uri-composable" },
  { id: "25", members: [{ username: "crywolf", avatarUrl: "https://avatars.githubusercontent.com/crywolf" }], description: "Fountainhead: Fountain coded blocks for useful bitcoin blockchain pruning. Allows nodes to prune data, yet still assist in initial block download for new nodes. Based on fountain codes, a class of erasure codes, that enable any full node to encode validated blocks into a small number of coded blocks, thereby reducing storage costs.", repoUrl: "https://github.com/crywolf/fountainhead" },
  { id: "26", members: [{ username: "diegobianqui", avatarUrl: "https://avatars.githubusercontent.com/diegobianqui" }], description: "BINST (Bitcoin Institutions) Protocol and Web App: Pilot project deployed on testnet4 that demonstrates how complex entities can be registered, owned, and controlled on bitcoin.", repoUrl: "https://bitcoin-institutions.github.io/binst-pilot-docs/introduction.html" },
  { id: "27", members: [{ username: "xyzconstant", avatarUrl: "https://avatars.githubusercontent.com/xyzconstant" }], description: "IPC extractor for peer-observer", repoUrl: "https://github.com/peer-observer/peer-observer/pull/379" },
  { id: "28", members: [{ username: "pruks-dev", avatarUrl: "https://avatars.githubusercontent.com/pruks-dev" }], description: "Point of Sale system that enables merchants to receive fiat payments for bitcoin transactions via peer-to-peer matching offers.", repoUrl: "https://github.com/pruks-dev/lnwPOS" },
  { id: "29", members: [{ username: "otaliptus", avatarUrl: "https://avatars.githubusercontent.com/otaliptus" }], description: "Interactive React/Vite playground for exploring PSBT v0 and v2 flows.", repoUrl: "https://github.com/otaliptus/psbt-playground" },
  { id: "30", members: [{ username: "otaliptus", avatarUrl: "https://avatars.githubusercontent.com/otaliptus" }], description: "Go implementation of psbt-v2 (BIP-370) for btcd.", repoUrl: "https://github.com/otaliptus/psbt-v2" },
  { id: "31", members: [{ username: "aaron-recompile", avatarUrl: "https://avatars.githubusercontent.com/aaron-recompile" }], description: "RootScope: Taproot script-path analyzer with witness fetch, Merkle proof reconstruction, and address verification.", repoUrl: "https://github.com/aaron-recompile/rootscope" },
  { id: "32", members: [{ username: "aaron-recompile", avatarUrl: "https://avatars.githubusercontent.com/aaron-recompile" }], description: "Eltoo State Chain on Signet (APO + CTV)", repoUrl: "https://delvingbitcoin.org/t/eltoo-state-chain-on-signet-three-rounds-six-transactions-apo-ctv/2413" },
  { id: "33", members: [{ username: "gboigwe", avatarUrl: "https://avatars.githubusercontent.com/gboigwe" }], description: "A visual chain, reorg, and fork creator for Regtest and Signet based on 0xB10C's visual chain/reorg project. Helps visualize how bitcoin's block tree works, mining blocks, seeing forks form, and understanding reorgs.", repoUrl: "https://github.com/gboigwe/orphan-chain-explorer" },
  { id: "34", members: [{ username: "purszki", avatarUrl: "https://avatars.githubusercontent.com/purszki" }], description: "Light client block filter research. Benchmarking BIP 158 against Binary Fuse filters, with reproducible datasets, wallet scenarios, and ground-truth validation on real mainnet data. Now with ARM results from a Raspberry Pi 5.", repoUrl: "https://purszki.github.io/bitcoin_research_01/" },
  { id: "35", members: [{ username: "pzafonte", avatarUrl: "https://avatars.githubusercontent.com/pzafonte" }], description: "node-bench: Node-agnostic high-level performance benchmark harness. Measures Initial Block Download (IBD) throughput, across commits, giving you a longitudinal record of sync performance.", repoUrl: "https://github.com/pzafonte/node-bench" },
];

export default function ChallengesPage() {
  return (
    <div className={`${viet.className} min-h-screen bg-[#FDF6EC]`}>
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-xl md:text-2xl font-bold text-[#fed137] hover:text-[#fed137]/80 transition-colors">
              ₿OSS Challenge
            </a>
            <div className="flex items-center gap-6 md:gap-8">
              <a href="/#about" className="text-sm md:text-base font-medium text-white hover:text-[#fed137] transition-colors uppercase tracking-wide">
                About
              </a>
              <a href="/#alum" className="text-sm md:text-base font-medium text-white hover:text-[#fed137] transition-colors uppercase tracking-wide">
                Alum
              </a>
              <a href="/#resources" className="text-sm md:text-base font-medium text-white hover:text-[#fed137] transition-colors uppercase tracking-wide">
                Resources
              </a>
              <a href="/challenges" className="text-sm md:text-base font-medium px-4 py-1.5 rounded-full border border-[#fed137]/40 text-[#fed137] hover:bg-[#fed137] hover:text-black transition-all uppercase tracking-wide">
                Portfolio Projects
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Content */}
      <main className="px-4 pt-32 pb-16 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight mb-4 text-[#191919]">
            2026 ₿OSS Challenge
          </h1>
          <p className="text-center text-lg text-[#191919]/70 mb-16">
            Portfolio Projects
          </p>
          <p className="text-center text-base text-[#191919]/60 -mt-12 mb-16 max-w-2xl mx-auto leading-relaxed">
            As part of the 2026 BOSS Challenge, some participants completed self-directed portfolio projects to gain hands-on experience and apply skills they developed earlier in the program. With the freedom to choose their own topics, these projects reflect a wide variety of interests and approaches. Discover them below.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 + index * 0.03 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <div className="w-full bg-[#0f0f0f] border-t border-white/10 py-6 md:py-8 px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-6">
          <div className="text-left">
            <p className="text-sm text-white/80">
              &copy; {new Date().getFullYear()} Chaincode Labs
            </p>
          </div>
          <div className="flex items-center gap-3 md:ml-auto">
            <div className="text-sm text-white/70 font-medium">
              ₿OSS Challenge
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
