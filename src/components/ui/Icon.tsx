"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Buildings,
  CalendarCheck,
  ChartLineUp,
  ChatsCircle,
  Check,
  ClipboardText,
  ClockCounterClockwise,
  Cpu,
  CreditCard,
  Database,
  Eye,
  FileText,
  Fingerprint,
  FlowArrow,
  Gift,
  GitBranch,
  Globe,
  Handshake,
  Headset,
  Key,
  LockKey,
  MapPin,
  Microphone,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  PlugsConnected,
  Receipt,
  Rocket,
  Scales,
  ShieldCheck,
  Stack,
  TreeStructure,
  UserCheck,
  UsersThree,
  Waveform,
  Wallet,
  WhatsappLogo,
  EnvelopeSimple,
  Truck,
  Brain,
  Ticket,
  BookOpenText,
  Phone,
  Lightning,
  type IconWeight,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const ICONS = {
  "phone-call": PhoneCall,
  "phone-incoming": PhoneIncoming,
  "phone-outgoing": PhoneOutgoing,
  phone: Phone,
  microphone: Microphone,
  database: Database,
  headset: Headset,
  users: UsersThree,
  calendar: CalendarCheck,
  card: CreditCard,
  gift: Gift,
  tree: TreeStructure,
  shield: ShieldCheck,
  lock: LockKey,
  key: Key,
  clock: ClockCounterClockwise,
  cpu: Cpu,
  plug: PlugsConnected,
  chart: ChartLineUp,
  waveform: Waveform,
  "user-check": UserCheck,
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  check: Check,
  fingerprint: Fingerprint,
  eye: Eye,
  buildings: Buildings,
  stack: Stack,
  branch: GitBranch,
  handshake: Handshake,
  chat: ChatsCircle,
  wallet: Wallet,
  receipt: Receipt,
  clipboard: ClipboardText,
  flow: FlowArrow,
  whatsapp: WhatsappLogo,
  mail: EnvelopeSimple,
  truck: Truck,
  brain: Brain,
  ticket: Ticket,
  book: BookOpenText,
  scales: Scales,
  rocket: Rocket,
  pin: MapPin,
  globe: Globe,
  file: FileText,
  bolt: Lightning,
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 24,
  weight = "duotone",
  className,
}: {
  name: IconName;
  size?: number;
  weight?: IconWeight;
  className?: string;
}) {
  const Component = ICONS[name];
  return <Component size={size} weight={weight} className={className} aria-hidden />;
}

const TONES = {
  ink: "bg-[#141213] text-[#FF6B5B] ring-1 ring-white/10",
  coral: "bg-[#FF6B5B] text-[#141213] ring-1 ring-black/10",
  cream: "bg-[#FFFBF5] text-[#141213] ring-1 ring-[#DDD4C4]",
  glass: "bg-white/5 text-[#F4EDE0] ring-1 ring-white/15 backdrop-blur",
} as const;

export function IconTile({
  name,
  tone = "ink",
  size = 48,
  className,
}: {
  name: IconName;
  tone?: keyof typeof TONES;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-2xl",
        TONES[tone],
        className
      )}
      style={{ width: size, height: size }}
    >
      <Icon name={name} size={Math.round(size * 0.52)} />
    </span>
  );
}
