'use client';
import { motion } from 'framer-motion';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import React from 'react';

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: React.ReactNode;
}

interface SkillsChartProps {
  skills: Skill[];
  type?: 'radar' | 'bars';
}

export default function SkillsChart({
  skills,
  type = 'radar',
}: SkillsChartProps) {
  // Prepare data for radar chart
  const radarData = skills.map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100,
  }));

  return (
    <div className='w-full'>
      {type === 'radar' ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='w-full h-72 md:h-96 flex items-center justify-center'
        >
          <ResponsiveContainer width='100%' height='100%'>
            <RadarChart cx='50%' cy='50%' outerRadius='80%' data={radarData}>
              <PolarGrid stroke='#8A2BE2' strokeDasharray='4 4' />
              <PolarAngleAxis
                dataKey='subject'
                tick={{ fill: '#50B0FF', fontWeight: 600 }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={false}
                axisLine={false}
              />
              <Radar
                name='Skill'
                dataKey='A'
                stroke='#50B0FF'
                fill='#8A2BE2'
                fillOpacity={0.4}
                strokeWidth={3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      ) : (
        <div className='space-y-6'>
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: 'easeOut' }}
              className='flex items-center gap-4'
            >
              {skill.icon && (
                <span className='text-2xl drop-shadow-[0_0_8px_#50B0FF]'>
                  {skill.icon}
                </span>
              )}
              <span className='w-32 md:w-40 font-semibold text-neonBlue'>
                {skill.name}
              </span>
              <div className='flex-1'>
                <div className='relative h-5 rounded-full bg-glass border border-neonBlue overflow-hidden'>
                  <motion.div
                    className='absolute left-0 top-0 h-full bg-gradient-to-r from-neonBlue to-neonPurple shadow-[0_0_12px_#8A2BE2]'
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1,
                      delay: idx * 0.1,
                      ease: 'easeOut',
                    }}
                  />
                  <div className='absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white font-bold'>
                    {skill.level}%
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
