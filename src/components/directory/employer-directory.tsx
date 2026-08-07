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

const ALL = "All";

const levelStyles: Record<CertificationLevel, string> = {
  Bronze: "bg-[#7A4B21]/10 text-[#7A4B21] border-[#7A4B21]/30",
  Silver: "bg-[#5B6472]/10 text-[#5B6472] border-[#5B6472]/30",
  Gold: "bg-gold/10 text-gold border-gold/40",
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        <p className="mt-6 rounded-lg border border-border bg-muted/60 p-6 text-muted-foreground">
          No certified employers match your current filters. Try widening your search — or check
          back soon: new organisations are certified throughout the year.
        </p>
      ) : (
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((employer) => (
            <li key={employer.id}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="font-heading text-lg text-navy-ink">
                      {employer.name}
                    </CardTitle>
                    <Badge variant="outline" className={levelStyles[employer.level]}>
                      {employer.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-1 text-sm text-muted-foreground">
                  <p>
                    {employer.industry} · {employer.location}
                  </p>
                  <p>Scope: {employer.scope}</p>
                  <p>{employer.validity}</p>
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
