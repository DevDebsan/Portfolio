import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Capability {
    category: string;
    skills: string[];
}

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.css']
})
export class SkillsComponent {
    capabilities: Capability[] = [
        { category: 'Languages', skills: ['Python', 'Kotlin', 'Java'] },
        { category: 'Computer Vision', skills: ['Object Detection & Multi-Object Tracking', 'Pose Estimation, Person Re-ID', 'Face Recognition & Anti-Spoofing', 'OpenCV, ML Kit'] },
        { category: 'Deep Learning & ML', skills: ['PyTorch', 'CNN, FCN, LSTM, BiLSTM, Transformers', 'Gradient Boosting', 'Few-shot Learning'] },
        { category: 'Optimization & Deployment', skills: ['ONNX, TensorFlow Lite, Core ML', 'Quantization', 'GPU-accelerated Inference', 'Edge AI'] },
        { category: 'Video & Streaming', skills: ['RTSP, GStreamer, FFmpeg', 'Multi-camera Pipelines', 'Real-time Video Processing'] },
        { category: 'Edge Hardware', skills: ['NVIDIA Jetson Nano', 'Raspberry Pi 5', 'Camera Modules, GPIO'] },
        { category: 'Android Engineering', skills: ['Android SDK, Jetpack Compose', 'MVVM, Multithreading', 'Background Services', 'Firebase Cloud Messaging'] },
        { category: 'Data, MLOps & Tools', skills: ['Dataset Curation & Annotation', 'Model Evaluation, Production Monitoring', 'Git, Linux, S3, Google Cloud', 'MySQL, SQLite, Firebase'] }
    ];
}
