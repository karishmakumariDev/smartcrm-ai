
import {
  Activity,
  BarChart3,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CircleDollarSign,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Users,
  UserRoundCog,
} from "lucide-react";

const groups = [
  {
    title: "OVERVIEW",
    links: [
      { label: "Dashboard", icon: LayoutDashboard },
      { label: "Analytics", icon: ChartNoAxesCombined },
    ],
  },
  {
    title: "CUSTOMERS",
    links: [
      { label: "CRM", icon: Users, active: true },
      { label: "Accounts", icon: UserRoundCog },
      { label: "Team & Roles", icon: ShieldCheck },
    ],
  },
  {
    title: "BUSINESS",
    links: [
      { label: "Revenue", icon: CircleDollarSign },
      { label: "Reports", icon: BarChart3 },
    ],
  },
  {
    title: "SYSTEM",
    links: [
      { label: "Integrations", icon: BriefcaseBusiness },
      { label: "Settings", icon: Settings },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="flex w-56 shrink-0 flex-col border-r border-slate-200 bg-white p-4">
      <div className="mb-8 flex items-center gap-2 text-xl font-bold">
        <span className="rounded-lg bg-indigo-500 p-2 text-white">
          <Activity size={20} />
        </span>
        Pulse
      </div>

      <nav className="space-y-6">
        {groups.map((group) => (
          <section key={group.title}>
            <p className="mb-3 text-xs font-semibold text-slate-400">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.links.map(({ label, icon: Icon, active }) => (
                <button
                  key={label}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm ${
                    active
                      ? "bg-indigo-50 font-semibold text-indigo-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Icon size={17} />
                  {label}
                </button>
              ))}
            </div>
          </section>
        ))}
      </nav>

      <div className="mt-auto rounded-xl bg-indigo-500 p-4 text-white">
        <p className="font-semibold">Upgrade to Pro</p>
        <p className="mt-2 text-xs">
          Discover more insights for your business.
        </p>
      </div>
    </aside>
  );
}
