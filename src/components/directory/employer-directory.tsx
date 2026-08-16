"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { employers, type CertificationLevel } from "@/data/employers";
import { cn } from "@/lib/utils";

const ALL = "All";

const levelMeta: Record<
  CertificationLevel,
  { description: string; badge: string; card: string; marker: string }
> = {
  Bronze: {
    description: "Strong workplace foundations",
    badge: "border-[#9A633F]/45 bg-[#F2DFCF] text-[#6F3F22]",
    card: "border-[#9A633F]/25 bg-[#FFF8F2]",
    marker: "bg-[#9A633F] text-white",
  },
  Silver: {
    description: "Mature systems and positive employee experience",
    badge: "border-[#657483]/40 bg-[#E8EDF0] text-[#43515E]",
    card: "border-[#657483]/25 bg-[#F4F7F9]",
    marker: "bg-[#657483] text-white",
  },
  Gold: {
    description: "A workplace others can benchmark against",
    badge: "border-[#A87900]/40 bg-[#F7E8A4] text-[#674E00]",
    card: "border-[#A87900]/25 bg-[#FFFAE8]",
    marker: "bg-[#B88708] text-white",
  },
};

const unique = (values: string[]) => [ALL, ...Array.from(new Set(values)).sort()];

export function EmployerDirectory() {
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState(ALL);
  const [location, setLocation] = useState(ALL);
  const [level, setLevel] = useState(ALL);

  const industries = useMemo(() => unique(employers.map((e) => e.industry)), []);
  const locations = useMemo(() => unique(employers.map((e) => e.location)), []);
  const levels = [ALL, "Bronze", "Silver", "Gold"];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return employers.filter(
      (e) =>
        (q === "" || e.name.toLowerCase().includes(q)) &&
        (industry === ALL || e.industry === industry) &&
        (location === ALL || e.location === location) &&
        (level === ALL || e.level === level)
    );
  }, [query, industry, location, level]);

  return (
    <div>
      <aside className="mb-5 rounded-2xl border border-dashed border-coral/50 bg-coral/8 px-5 py-4 text-sm text-navy/75" data-demo-directory>
        <strong className="text-navy-ink">Demo directory:</strong> organisation names, locations,
        scopes, and validity dates are illustrative records ready to be replaced by backend data.
      </aside>

      <div className="mb-6 grid gap-2 sm:grid-cols-3" aria-label="Certification level guide">
        {(Object.keys(levelMeta) as CertificationLevel[]).map((tier, index) => {
          const meta = levelMeta[tier];
          return (
            <div key={tier} className={cn("flex items-center gap-3 rounded-2xl border p-3", meta.card)}>
              <span className={cn("grid size-10 shrink-0 place-items-center rounded-full text-sm font-bold", meta.marker)}>
                {index + 1}
              </span>
              <span>
                <strong className="block text-sm text-navy-ink">{tier} certification</strong>
                <span className="block text-xs leading-5 text-muted-foreground">{meta.description}</span>
              </span>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 rounded-3xl border border-teal/10 bg-mint/55 p-5 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
        <div className="lg:col-span-1">
          <label htmlFor="directory-search" className="text-sm font-medium text-navy-ink">
            Search by organisation name
          </label>
          <Input
            id="directory-search"
            className="mt-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Organisation name"
          />
        </div>

        <FilterSelect
          label="Industry"
          value={industry}
          onChange={setIndustry}
          options={industries}
        />
        <FilterSelect
          label="Location"
          value={location}
          onChange={setLocation}
          options={locations}
        />
        <FilterSelect
          label="Certification level"
          value={level}
          onChange={setLevel}
          options={levels}
        />
      </div>

      <p className="mt-6 text-sm text-muted-foreground" role="status">
        {results.length} of {employers.length} certified organisations
      </p>

      {results.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-border bg-white/70 p-8 text-muted-foreground">
          No certified employers match your current filters. Try widening your search — or check
          back soon: new organisations are certified throughout the year.
        </p>
      ) : (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((employer) => (
            <li key={employer.id}>
              <Card
                data-demo-record={employer.id}
                className={cn(
                  "group relative h-full overflow-hidden border-2 transition-transform duration-300 hover:-translate-y-1",
                  levelMeta[employer.level].card
                )}
              >
                <div className={cn("absolute inset-y-0 left-0 w-1.5", levelMeta[employer.level].marker)} />
                <CardHeader>
                  <div className="flex flex-col items-start gap-4">
                    <Badge variant="outline" className={cn("px-3 py-1 font-semibold", levelMeta[employer.level].badge)}>
                      {employer.level} certification
                    </Badge>
                    <CardTitle className="font-heading text-lg text-navy-ink">
                      {employer.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-1 text-sm text-muted-foreground">
                  <p className="mb-4 font-medium text-navy/75">{levelMeta[employer.level].description}</p>
                  <p>
                    {employer.industry} · {employer.location}
                  </p>
                  <p>Scope: {employer.scope}</p>
                  <p className="pt-2 font-semibold text-navy-ink">{employer.validity}</p>
                  <p className="pt-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#9a4635]">
                    Demo employer record
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div>
      <span className="text-sm font-medium text-navy-ink">{label}</span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="mt-2 w-full" aria-label={label}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
