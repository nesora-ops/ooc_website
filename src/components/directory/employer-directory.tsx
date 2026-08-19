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
import type { CertificationLevel, Employer } from "@/data/employers";
import { cn } from "@/lib/utils";

const ALL = "All";

const levelMeta: Record<
  CertificationLevel,
  { description: string; badge: string }
> = {
  Silver: {
    description: "Strong workplace foundations",
    badge: "border-[#657483]/40 bg-[#E8EDF0] text-[#43515E]",
  },
  Gold: {
    description: "Mature systems and positive employee experience",
    badge: "border-[#A87900]/40 bg-[#F7E8A4] text-[#674E00]",
  },
  Platinum: {
    description: "Advanced, consistent workplace practices",
    badge: "border-[#6078AA]/35 bg-[#E7ECFA] text-[#41557F]",
  },
  Diamond: {
    description: "A workplace others can benchmark against",
    badge: "border-[#08766D]/35 bg-[#DFF4EC] text-[#075E57]",
  },
};

const unique = (values: string[]) => [ALL, ...Array.from(new Set(values)).sort()];

export function EmployerDirectory({ employers }: { employers: Employer[] }) {
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState(ALL);
  const [location, setLocation] = useState(ALL);
  const [level, setLevel] = useState(ALL);

  const industries = useMemo(() => unique(employers.map((e) => e.industry)), [employers]);
  const locations = useMemo(() => unique(employers.map((e) => e.location)), [employers]);
  const levels = [ALL, "Silver", "Gold", "Platinum", "Diamond"];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return employers.filter(
      (e) =>
        (q === "" || e.name.toLowerCase().includes(q)) &&
        (industry === ALL || e.industry === industry) &&
        (location === ALL || e.location === location) &&
        (level === ALL || e.level === level)
    );
  }, [employers, query, industry, location, level]);

  return (
    <div>
      <div className="mb-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4" aria-label="Certification level guide">
        {(Object.keys(levelMeta) as CertificationLevel[]).map((tier) => {
          const meta = levelMeta[tier];
          return (
            <div key={tier} className="rounded-2xl border border-navy/8 bg-white/75 p-4">
              <Badge variant="outline" className={cn("px-3 py-1 font-semibold", meta.badge)}>
                {tier}
              </Badge>
              <span className="mt-3 block">
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
                className="group h-full border border-navy/10 bg-white/85 transition-transform duration-300 hover:-translate-y-1"
              >
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
                  {employer.scope && <p>Scope: {employer.scope}</p>}
                  <p className="pt-2 font-semibold text-navy-ink">{employer.validity}</p>
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
