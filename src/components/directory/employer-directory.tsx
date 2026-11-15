"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

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

// Badge colours per level. The level descriptions arrive as a prop (from the
// Certification levels list), keyed by slug ("silver").
const levelMeta: Record<CertificationLevel, { badge: string }> = {
  Silver: { badge: "border-[#657483]/40 bg-[#E8EDF0] text-[#43515E]" },
  Gold: { badge: "border-[#A87900]/40 bg-[#F7E8A4] text-[#674E00]" },
  Platinum: { badge: "border-[#6078AA]/35 bg-[#E7ECFA] text-[#41557F]" },
  Diamond: { badge: "border-[#08766D]/35 bg-[#DFF4EC] text-[#075E57]" },
};

export type DirectoryCopy = {
  searchLabel: string;
  searchPlaceholder: string;
  industryLabel: string;
  locationLabel: string;
  levelLabel: string;
  resultsLabel: string;
  emptyMessage: string;
  cardLevelSuffix: string;
  cardScopeLabel: string;
};

const unique = (values: string[]) => [ALL, ...Array.from(new Set(values)).sort()];

export function EmployerDirectory({
  employers,
  levelDescriptions,
  copy,
}: {
  employers: Employer[];
  levelDescriptions: Record<string, string>;
  copy: DirectoryCopy;
}) {
  const describe = (level: CertificationLevel) => levelDescriptions[level.toLowerCase()] ?? "";

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
                <span className="block text-xs leading-5 text-muted-foreground">{describe(tier)}</span>
              </span>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 rounded-3xl border border-teal/10 bg-mint/55 p-5 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
        <div className="lg:col-span-1">
          <label htmlFor="directory-search" className="text-sm font-medium text-navy-ink">
            {copy.searchLabel}
          </label>
          <Input
            id="directory-search"
            className="mt-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={copy.searchPlaceholder}
          />
        </div>

        <FilterSelect
          label={copy.industryLabel}
          value={industry}
          onChange={setIndustry}
          options={industries}
        />
        <FilterSelect
          label={copy.locationLabel}
          value={location}
          onChange={setLocation}
          options={locations}
        />
        <FilterSelect
          label={copy.levelLabel}
          value={level}
          onChange={setLevel}
          options={levels}
        />
      </div>

      <p className="mt-6 text-sm text-muted-foreground" role="status">
        {results.length} of {employers.length} {copy.resultsLabel}
      </p>

      {results.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-border bg-white/70 p-8 text-muted-foreground">
          {copy.emptyMessage}
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
                    <div className="flex items-center gap-3">
                      {/* Not the full seal: a card mark this small would render
                          its wordmark and laurel illegible (see brand/seal.tsx,
                          96px floor), so the monogram stands in at 28px. */}
                      <Image
                        src="/images/brand/mark-gold.webp"
                        alt=""
                        width={577}
                        height={200}
                        className="h-[28px] w-auto shrink-0"
                      />
                      <Badge variant="outline" className={cn("px-3 py-1 font-semibold", levelMeta[employer.level].badge)}>
                        {employer.level} {copy.cardLevelSuffix}
                      </Badge>
                    </div>
                    <CardTitle className="font-heading text-lg text-navy-ink">
                      {employer.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-1 text-sm text-muted-foreground">
                  <p className="mb-4 font-medium text-navy/75">{describe(employer.level)}</p>
                  <p>
                    {employer.industry} · {employer.location}
                  </p>
                  {employer.scope && <p>{copy.cardScopeLabel} {employer.scope}</p>}
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
