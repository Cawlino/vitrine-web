Add-Type -AssemblyName System.Drawing

$baseDir = Join-Path (Get-Location) "public"
$symbolPath = Join-Path $baseDir "logo-symbol.png"

$fileStream = [System.IO.File]::OpenRead($symbolPath)
$symImg = [System.Drawing.Image]::FromStream($fileStream)
$symW = $symImg.Width
$symH = $symImg.Height
$ratio = $symH / $symW

Write-Host "Source symbol: ${symW}x${symH} (ratio: $ratio)"

# Brand color #0F172A
$bgColor = [System.Drawing.Color]::FromArgb(255, 15, 23, 42)

function Generate-Square-Icon {
    param(
        [int]$size,
        [string]$outputPath,
        [double]$scaleFactor = 0.84
    )

    $targetW = [int]($size * $scaleFactor)
    $targetH = [int]($targetW * $ratio)
    $posX = [int](($size - $targetW) / 2)
    $posY = [int](($size - $targetH) / 2)

    $bmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    # High quality settings
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    # Background fill
    $brush = New-Object System.Drawing.SolidBrush($bgColor)
    $g.FillRectangle($brush, 0, 0, $size, $size)
    $brush.Dispose()

    # Draw centered symbol
    $destRect = New-Object System.Drawing.Rectangle($posX, $posY, $targetW, $targetH)
    $g.DrawImage($symImg, $destRect, 0, 0, $symW, $symH, [System.Drawing.GraphicsUnit]::Pixel)

    $g.Dispose()

    # Save PNG
    $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Created: $outputPath ($size x $size, target: ${targetW}x${targetH} at $posX, $posY)"
}

Generate-Square-Icon -size 512 -outputPath (Join-Path $baseDir "icon-512.png") -scaleFactor 0.84
Generate-Square-Icon -size 512 -outputPath (Join-Path $baseDir "favicon.png") -scaleFactor 0.84
Generate-Square-Icon -size 192 -outputPath (Join-Path $baseDir "icon-192.png") -scaleFactor 0.84
Generate-Square-Icon -size 180 -outputPath (Join-Path $baseDir "apple-touch-icon.png") -scaleFactor 0.84
Generate-Square-Icon -size 48  -outputPath (Join-Path $baseDir "favicon-48x48.png") -scaleFactor 0.84

$fileStream.Close()
$symImg.Dispose()
Write-Host "Icon generation completed successfully!"
