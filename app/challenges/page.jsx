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
  { id: "1", members: [{ username: "panon_btc", avatarUrl: "https://avatars.githubusercontent.com/panon-btc" }], description: "A tool to label and explore the history of your own coins", repoUrl: "https://github.com/panon-btc/cory" },
  { id: "2", members: [{ username: "stephanie_42590", avatarUrl: "https://avatars.githubusercontent.com/aizuanjeme" }], description: "It traces transaction history so you can see where coins come from and how they move through transactions.", repoUrl: "https://github.com/aizuanjeme/know-your-coin-history" },
  { id: "3", members: [{ username: "razorbest", avatarUrl: "https://avatars.githubusercontent.com/RazorBest" }, { username: "arowolokenny01" }], description: "BIP-324 traffic analysis", repoUrl: "https://github.com/RazorBest/bip324-traffic-analysis" },
  { id: "4", members: [{ username: "muhammadhamza001", avatarUrl: "https://avatars.githubusercontent.com/Hamza1610" }], description: "An interactive visual tool that lets users create and observe real blockchain forks/reorgs on test networks", repoUrl: "https://github.com/Hamza1610/bitcoin_block_weave" },
  { id: "5", members: [{ username: "haris2258", avatarUrl: "https://avatars.githubusercontent.com/harismuzaffer" }, { username: "sidharth5123" }], description: "Iterating on a tool to identify dust attack UTXOs and creating PSBTs to spend them as fees and safely remove them from your wallet", repoUrl: "https://github.com/bubb1es71/ddust" },
  { id: "6", members: [{ username: "cliobitcoinbank", avatarUrl: "https://avatars.githubusercontent.com/8144225309" }], description: "The first implementation of SuperScalar, a new kind of lightning channel factory that can more easily scale LN and provide cooperative LSP services with no bitcoin softfork needed.", repoUrl: "https://github.com/8144225309/SuperScalar" },
  { id: "7", members: [{ username: "tech_lateef", avatarUrl: "https://avatars.githubusercontent.com/TechLateef" }], description: "psbtv2 + BIP375 library Implementation in Golang (btcd project)", repoUrl: "https://github.com/TechLateef/psbt" },
  { id: "8", members: [{ username: "code_warrior_", avatarUrl: "https://avatars.githubusercontent.com/Ugarba202" }], description: "Library to manage UTXO requirements for lightning nodes with anchor channels (LDK)", repoUrl: "https://github.com/Ugarba202/Lightning-UTXO-Anchor-Manager" },
  { id: "9", members: [{ username: "noahjoeris", avatarUrl: "https://avatars.githubusercontent.com/noahjoeris" }], description: "Visual chain, reorg, and fork creator", repoUrl: "https://github.com/noahjoeris/reorg-playground" },
  { id: "10", members: [{ username: "iamthesvn", avatarUrl: "https://avatars.githubusercontent.com/iamthesvn" }], description: "A transaction anchor fee-bumping service, payable via Lightning Network.", repoUrl: "https://github.com/iamthesvn/feebumper" },
  { id: "11", members: [{ username: "susan_31723", avatarUrl: "https://avatars.githubusercontent.com/SusanGithaigaN" }], description: "Helps users get their stuck lightning transactions confirmed when Bitcoin fees go up.", repoUrl: "https://github.com/SusanGithaigaN/lightning-anchor-fee-outputs" },
  { id: "12", members: [{ username: "olanma", avatarUrl: "https://avatars.githubusercontent.com/UfiairENE" }, { username: "rulesplayer" }], description: "CLI tool that identifies dust attack UTXOs and safely removes them before they can be used to deanonymize you", repoUrl: "https://github.com/UfiairENE/bitcoin-utxo-observatory" },
  { id: "13", members: [{ username: "nkatha23", avatarUrl: "https://avatars.githubusercontent.com/nkatha23" }], description: "A Bitcoin transaction graph explorer that lets you trace where your coins came from. You paste a txid or address, it draws an interactive graph of inputs and outputs, and you can click to walk backwards through the full coin history.", repoUrl: "https://github.com/nkatha23/knowyourcoinhistory" },
  { id: "14", members: [{ username: "diegobianqui", avatarUrl: "https://avatars.githubusercontent.com/diegobianqui" }, { username: "tory_vand" }, { username: "roundtripoor" }], description: "We produced and validated this publication describing the concept and dynamics of the visualization platform for LN gossip-observer that we presented during the BTC++ Brazil hackathon, where we were finalists and received an honorable mention.", repoUrl: "https://github.com/bitcoin-visuals/LN_gossip_observer_visuals" },
  { id: "15", members: [{ username: "Ebube Ukpai", avatarUrl: "https://avatars.githubusercontent.com/Miracle656" }], description: "Working on a real-time, interactive developer tool for visualizing and modeling blockchain forks and reorganizations on a local Bitcoin Regtest network.", repoUrl: "https://github.com/Miracle656/Visual-Fork-Creator-Bitcoin-Regtest-" },
  { id: "16", members: [{ username: "eppie.app", avatarUrl: "https://avatars.githubusercontent.com/ValeraFinebits" }], description: "Payjoin BTCPayServer plugin", repoUrl: "https://github.com/ValeraFinebits/btcpayserver-payjoin-plugin" },
  { id: "17", members: [{ username: "guischet", avatarUrl: "https://avatars.githubusercontent.com/GuiSchet" }], description: "A peer-observer tool that subscribes to NATS events and emits alerts to stdout when anomalous peer behavior is detected.", repoUrl: "https://github.com/GuiSchet/peer-observer" },
  { id: "18", members: [{ username: "gammawaver36", avatarUrl: "https://avatars.githubusercontent.com/vittoridavide" }], description: "Provenance is a local-first Bitcoin analysis tool for tracing the origin and history of coins through their transaction ancestry. You can classify and label each UTXO or Transaction and export it in BIP-329 or CSV.", repoUrl: "https://github.com/vittoridavide/provenance-btc" },
  { id: "19", members: [{ username: "charlesoma", avatarUrl: "https://avatars.githubusercontent.com/charlesoma" }], description: "A Bitcoin CLI tool for detecting and cleaning dust UTXOs using PSBT workflows.", repoUrl: "https://github.com/charlesoma/dustcleaner" },
  { id: "20", members: [{ username: "artemiypospelov", avatarUrl: "https://avatars.githubusercontent.com/1estart" }], description: "Primitive dust sweeper", repoUrl: "https://github.com/1estart/dust_sweeper" },
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
                Challenges
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
