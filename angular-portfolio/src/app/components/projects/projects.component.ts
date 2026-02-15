import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
    title: string;
    subtitle: string;
    description: string[];
    tech: string[];
    link?: string;
    assetClass: string;
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.css']
})
export class ProjectsComponent {

    projects: Project[] = [
        {
            title: 'Play–Pause–Post (PPP)',
            subtitle: 'AI Sports Replay & Analytics Platform',
            description: [
                'Production-grade sports analytics and decision-support platform for badminton and racket sports.',
                'Implemented live ball and shuttle tracking systems with continuous model tuning.',
                'Deployed TrackNet-based tracking with 90%+ accuracy and integrated paddle detection.',
                'Optimized inference pipelines for iOS/CoreML and GPU execution for low-latency replays.'
            ],
            tech: ['TrackNet', 'CoreML', 'OpenCV', 'GPU Optimization'],
            link: 'https://play.google.com/store/apps/details?id=com.vtpl.volley&hl=en',
            assetClass: 'asset-ppp'
        },
        {
            title: 'V-Commute',
            subtitle: 'Enterprise Commute Tracking Platform',
            description: [
                'Employee commute tracking, attendance, and travel allowance management.',
                'Implemented geofenced real-time tracking with background execution optimization.',
                'Integrated biometric and face-based authentication with 99%+ accuracy.',
                'Developed lightweight on-device models for low-connectivity environments.'
            ],
            tech: ['Geofencing', 'Biometrics', 'On-device ML', 'Android'],
            link: 'https://play.google.com/store/apps/details?id=com.vcommute.traveltracking&hl=en',
            assetClass: 'asset-commute'
        },
        {
            title: 'V-Fleet',
            subtitle: 'Fleet & Vehicle Operations Management',
            description: [
                'Enterprise fleet and vehicle operations management platform.',
                'Built an offline-first architecture to support uninterrupted fleet operations.',
                'Implemented secure backend synchronization for vehicle, trip, and usage data.',
                'Designed scalable data workflows for fleet monitoring and reporting.'
            ],
            tech: ['Offline-first', 'Data Sync', 'Fleet Management', 'Android'],
            link: 'https://play.google.com/store/apps/details?id=com.vareli.fleet&hl=en',
            assetClass: 'asset-commute'
        },
        {
            title: 'Event Management',
            subtitle: 'Enterprise Event Logistics & Tracking',
            description: [
                'Comprehensive solution for corporate event planning and execution.',
                'Real-time attendee tracking and session management.',
                'Integrated QR-based check-in and digital certification delivery.',
                'Scalable backend for multi-track event synchronization.'
            ],
            tech: ['Event Tech', 'QR Systems', 'Real-time Sync', 'Android'],
            link: 'https://play.google.com/store/apps/details?id=com.vareli.v_event_management&hl=en',
            assetClass: 'asset-cctv'
        },
        {
            title: 'V-Asset',
            subtitle: 'Secure Asset Lifecycle Management',
            description: [
                'Enterprise solution for secure asset lifecycle and inventory management.',
                'Integrated QR and barcode scanning using ML Kit for rapid identification.',
                'Implemented audit trails and asset history tracking for compliance.',
                'JWT-based authentication with role-based access control.'
            ],
            tech: ['ML Kit', 'QR/Barcode', 'JWT', 'Inventory'],
            link: 'https://play.google.com/store/apps/details?id=com.asset.assetmanagementproj&hl=en',
            assetClass: 'asset-ppp'
        },
        {
            title: 'iCan',
            subtitle: 'Accessibility-focused Android Application',
            description: [
                'Designed for deaf users to support visual learning through sign-language storytelling.',
                'Integrated speech-to-text and text-to-speech for two-way communication.',
                'Led a cross-functional team of 4 developers from design through delivery.'
            ],
            tech: ['Accessibility', 'STT/TTS', 'Sign Language', 'Media'],
            link: 'https://play.google.com/store/apps/details?id=com.vtpl.challenged&hl=en',
            assetClass: 'asset-ican'
        }
    ];

    openLink(url?: string) {
        if (url) window.open(url, '_blank');
    }
}
